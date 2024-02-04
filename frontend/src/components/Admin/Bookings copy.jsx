import React, { useState, useEffect } from 'react';
import { Table, Popconfirm, Button } from 'antd';
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

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: 'Hours',
      dataIndex: 'hours',
      key: 'hours'
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'Start',
      dataIndex: 'start',
      key: 'start'
    },
    {
      title: 'End',
      dataIndex: 'end',
      key: 'end'
    },
    {
      title: 'State',
      key: 'action',
      render: (text, record) => (
        <Popconfirm
          title="Silmek istediğinizden emin misiniz?"
          onConfirm={() => handleDelete(record._id)}
        >
          <Button type="danger" icon={<DeleteOutlined />} />
        </Popconfirm>
      )
    },
  ];
  return (
    <div>
      <h2>Booking List</h2>
      <Table
        dataSource={bookings}
        columns={columns}
        rowKey={record => record._id}
        scroll={{ x: "max-content" }} // Bütün içeriği göstermek için x kaydırmasını ayarlayın
      />
    </div>
  );
};

export default Bookings;
