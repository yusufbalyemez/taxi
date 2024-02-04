import React, { useState, useEffect } from 'react';
import { Descriptions, Popconfirm, Button, Card } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/bookings');
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

  return (
    <div>
      <h2>Booking List</h2>
      {bookings.map((booking) => (
        <Card key={booking._id} style={{ marginBottom: 16 }}>
          <Descriptions title="Booking Info" bordered column={1}>
            <Descriptions.Item label="Name">{booking.name}</Descriptions.Item>
            <Descriptions.Item label="Phone">{booking.phone}</Descriptions.Item>
            <Descriptions.Item label="Hours">{booking.hours}</Descriptions.Item>
            <Descriptions.Item label="Date">{booking.date}</Descriptions.Item>
            <Descriptions.Item label="Start">{booking.start}</Descriptions.Item>
            <Descriptions.Item label="End">{booking.end}</Descriptions.Item>
            <Descriptions.Item label="Action">
              <Popconfirm
                title="Silmek istediğinizden emin misiniz?"
                onConfirm={() => handleDelete(booking._id)}
              >
                <Button type="danger" icon={<DeleteOutlined />} />
              </Popconfirm>
            </Descriptions.Item>
          </Descriptions>
        </Card>
      ))}
    </div>
  );
};

export default Bookings;
