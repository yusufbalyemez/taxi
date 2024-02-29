import React, { useState, useEffect } from 'react';
import { useLanguage } from '../Languages/LanguageContext'; // useLanguage hook'unu içe aktarın
import { Descriptions, Popconfirm, Button, Card } from 'antd';
import { DeleteOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { message } from 'antd'; //message butonu ant kütüphanesinden çekildi


const TodayBookings = () => {


  

  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const { language } = useLanguage(); // Dil bağlamından dil bilgisini al
  const text = language.adminpage; // Navbar metinlerine erişim

  const [bookings, setBookings] = useState([]);
  const [showStatusBtn, setShowStatusBtn] = useState(true);


  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/admin`);
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
      message.success(`${text.bookingstatus.fix} ${status === 'approved' ? `${text.bookingstatus.ok}` : `${text.bookingstatus.cancel}`}.`);
      fetchBookings();
    } catch (error) {
      console.error('Error updating booking status: ', error);
      message.error(`Booking durumu güncellenirken bir hata oluştu.`);
    }
  };

  // status değerlerini karşılık gelen metinlere çeviren bir fonksiyon
  const getStatusText = (statusNumber) => {
    const statusMap = {
      'denied': text.denied,
      'waiting': text.waitingforapproval,
      'approved': text.approved
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
      <h2>{text.title2}</h2>
      {bookings.map((booking) => (
        <Card key={booking._id} style={{ marginBottom: 16, borderBlockEndColor: 'gray'}}>
          <Descriptions title={text.bookingList} bordered column={1}>
            {/* <Descriptions.Item label="Id">{booking._id}</Descriptions.Item> */}
            <Descriptions.Item label={text.name}>{booking.name}</Descriptions.Item>
            <Descriptions.Item label={text.phone}>{booking.phone}</Descriptions.Item>
            <Descriptions.Item label={text.hours}>{booking.hours}</Descriptions.Item>
            <Descriptions.Item label={text.date}>{booking.date}</Descriptions.Item>
            <Descriptions.Item label={text.start}>{booking.start}</Descriptions.Item>
            <Descriptions.Item label={text.end}>{booking.end}</Descriptions.Item>
            {/* <Descriptions.Item label="User Id">{booking.user_id}</Descriptions.Item> */}
            <Descriptions.Item label={text.status}>
              <span className={getStatusClass(booking.status)}>
                {getStatusText(booking.status)}
              </span>
            </Descriptions.Item>
            <Descriptions.Item label={text.process}>
              <Popconfirm
                title={text.deletequestion}
                onConfirm={() => handleDelete(booking._id)}
              >
                <Button type="danger" icon={<DeleteOutlined />} />
              </Popconfirm>
            </Descriptions.Item>
            <Descriptions.Item label="">

              {booking.status === "waiting" ? (
                <>
                  <Button
                    type="primary"
                    icon={<CheckCircleOutlined />}
                    onClick={() => updateBookingStatus(booking._id, 'approved')}
                    style={{ marginRight: 8, height: 50, marginBottom:20 }}
                  >
                    {text.submitBtn}
                  </Button>
                  <Button
                    type="primary"
                    danger
                    icon={<CloseCircleOutlined />}
                    onClick={() => updateBookingStatus(booking._id, 'denied')}
                    style= {{height:50}}
                  >
                    {text.cancelBtn}
                  </Button>
                </>
              ) : booking.status === "denied" ? (
                <Button
                  type="primary"
                  icon={<CheckCircleOutlined />}
                  onClick={() => updateBookingStatus(booking._id, 'approved')}
                  style= {{height:50}}
                >
                  {text.submitBtn}
                </Button>
              ) : (
                <Button
                  type="primary"
                  danger
                  icon={<CloseCircleOutlined />}
                  onClick={() => updateBookingStatus(booking._id, 'denied')}
                  style= {{height:50}}
                >
                  {text.cancelBtn}
                </Button>
              )}

            </Descriptions.Item>
          </Descriptions>
        </Card>
      ))}
    </div>
  );
};

export default TodayBookings;
