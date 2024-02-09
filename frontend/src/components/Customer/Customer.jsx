import React, { useState, useEffect } from 'react';
import { Descriptions, Popconfirm, Button, Card } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import "./Customer.css"

const Customer = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    // localStorage'dan user_id'yi al
    const userId = localStorage.getItem('user_id');
    if (!userId) {
      console.log('User ID not found');
      return;
    }

    try {
      // Kullanıcının user_id'sine göre bookings isteği
      const response = await fetch(`http://localhost:5000/api/bookings/${userId}`);
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
      const response = await fetch(`http://localhost:5000/api/bookings/${id}`, {
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
      {bookings.length > 0 ? bookings.map((booking) => (
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
            <Descriptions.Item label="Status">
              <span className={getStatusClass(booking.status)}>
                {getStatusText(booking.status)}
              </span>
            </Descriptions.Item>
            <Descriptions.Item label="Action">
              <Popconfirm
                title="Are you sure to delete this booking?"
                onConfirm={() => handleDelete(booking._id)}
              >
                <Button type="danger" icon={<DeleteOutlined />} />
              </Popconfirm>
            </Descriptions.Item>
          </Descriptions>
        </Card>
      )) : <p>No bookings found for this user ID.</p>}
    </div>
  );
};

export default Customer;
