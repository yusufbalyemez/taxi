import React, { useState, useEffect } from 'react';
import { Descriptions, Popconfirm, Button, Card } from 'antd';
import { DeleteOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { message } from 'antd'; //message butonu ant kütüphanesinden çekildi

const Bookings = () => {

  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const [bookings, setBookings] = useState([]);
  const [showStatusBtn, setShowStatusBtn] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/bookings`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/api/bookings/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Error deleting booking');
      }
      // Silme işlemi başarılı olduktan sonra booking listesini güncelle
      fetchBookings();
    } catch (error) {
      console.error('Error deleting booking: ', error);
    }
  };


  const updateBookingStatus = async (id, status) => {
    try {
      const response = await fetch(`${apiUrl}/api/bookings/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) {
        throw new Error('Error updating booking status');
      }
      setShowStatusBtn(false); //Butonlar görünmesin.
      message.success(`Booking ${status === 'approved' ? 'onaylandı' : 'reddedildi'}.`);
      fetchBookings();
    } catch (error) {
      console.error('Error updating booking status: ', error);
      message.error(`Booking durumu güncellenirken bir hata oluştu.`);
    }
  };

  // status değerlerini karşılık gelen metinlere çeviren bir fonksiyon
  const getStatusText = (statusNumber) => {
    const statusMap = {
      'denied': 'Denied',
      'waiting': 'Waiting For Approval',
      'approved': 'Approved'
    };
    return statusMap[statusNumber] || 'Unknown Status';
  };

  // status'a göre CSS sınıfını döndüren fonksiyon
  const getStatusClass = (statusNumber) => {
    const statusClassMap = {
      'denied': 'status-denied',
      'waiting': 'status-waiting',
      'approved': 'status-approved'
    };
    return statusClassMap[statusNumber] || '';
  };

  return (
    <div>
      <h2>Booking List</h2>
      {bookings.map((booking) => (
        <Card key={booking._id} style={{ marginBottom: 16 }}>
          <Descriptions title="Booking Info" bordered column={1}>
            <Descriptions.Item label="Id">{booking._id}</Descriptions.Item>
            <Descriptions.Item label="Name">{booking.name}</Descriptions.Item>
            <Descriptions.Item label="Phone">{booking.phone}</Descriptions.Item>
            <Descriptions.Item label="Hours">{booking.hours}</Descriptions.Item>
            <Descriptions.Item label="Date">{booking.date}</Descriptions.Item>
            <Descriptions.Item label="Start">{booking.start}</Descriptions.Item>
            <Descriptions.Item label="End">{booking.end}</Descriptions.Item>
            <Descriptions.Item label="User Id">{booking.user_id}</Descriptions.Item>
            <Descriptions.Item label="Action">
              <Popconfirm
                title="Silmek istediğinizden emin misiniz?"
                onConfirm={() => handleDelete(booking._id)}
              >
                <Button type="danger" icon={<DeleteOutlined />} />
              </Popconfirm>
            </Descriptions.Item>
            <Descriptions.Item label="Status">
              <span className={getStatusClass(booking.status)}>
                {getStatusText(booking.status)}
              </span>
            </Descriptions.Item>
            <Descriptions.Item label="Action">


              {booking.status === "waiting" ? (
                <>
                  <Button
                    type="primary"
                    icon={<CheckCircleOutlined />}
                    onClick={() => updateBookingStatus(booking._id, 'approved')}
                    style={{ marginRight: 8 }}
                  >
                    Kabul Et
                  </Button>
                  <Button
                    type="default"
                    icon={<CloseCircleOutlined />}
                    onClick={() => updateBookingStatus(booking._id, 'denied')}
                  >
                    Reddet
                  </Button>
                </>
              ) : booking.status === "denied" ? (
                <Button
                  type="primary"
                  icon={<CheckCircleOutlined />}
                  onClick={() => updateBookingStatus(booking._id, 'approved')}
                >
                  Kabul Et
                </Button>
              ) : (
                <Button
                  type="default"
                  icon={<CloseCircleOutlined />}
                  onClick={() => updateBookingStatus(booking._id, 'denied')}
                >
                  Reddet
                </Button>
              )}



            </Descriptions.Item>

          </Descriptions>
        </Card>
      ))}
    </div>
  );
};

export default Bookings;
