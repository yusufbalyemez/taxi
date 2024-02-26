import React, { useState, useEffect } from 'react';
import { useLanguage } from '../Languages/LanguageContext'; // useLanguage hook'unu içe aktarın
import { Descriptions, Popconfirm, Button, Card } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import "./Customer.css"

const Customer = () => {

  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const { language } = useLanguage(); // Dil bağlamından dil bilgisini al
  const text = language.customerbookingspage // Navbar metinlerine erişim

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
      const response = await fetch(`${apiUrl}/api/bookings/${userId}`);
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

  // status değerlerini karşılık gelen metinlere çeviren bir fonksiyon
  const getStatusText = (statusNumber) => {
    const statusMap = {
      'denied': text.denied,
      'waiting': text.waiting,
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
      <h2>{text.bookingList}</h2>
      {bookings.length > 0 ? bookings.map((booking) => (
        <Card key={booking._id} style={{ marginBottom: 16 }}>
          <Descriptions title={text.bookingInfo} bordered column={1}>
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
            <Descriptions.Item label={text.action}>
              <Popconfirm
                title={text.deleteBookingQuest}
                onConfirm={() => handleDelete(booking._id)}
              >
                <Button type="danger" icon={<DeleteOutlined />} />
              </Popconfirm>
            </Descriptions.Item>
          </Descriptions>
        </Card>
      )) : ""}
    </div>
  );
};

export default Customer;
