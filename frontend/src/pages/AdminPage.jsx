import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Bookings from '../components/Admin/Bookings';
import TodayBookings from '../components/Admin/TodayBookings';
import Settings from '../components/Admin/Settings';
import { Layout, Menu, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const AdminPage = () => {
  const handleLogout = () => {
    // Çıkış işlemleri burada yapılabilir
    localStorage.removeItem('token');
    window.location.href = "/";
  };

  // Menü öğeleri için bir array tanımlayın
  const menuItems = [
    { label: <Link to="/admin">Bookings</Link>, key: '1' },
    { label: <Link to="/admin/bookings">Old Bookings</Link>, key: '2' },
    { label: <Link to="/admin/settings">Settings</Link>, key: '3' },
  ];

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', padding: '0 50px', justifyContent: 'space-between' }}>
        {/* Menü öğelerini items prop'una aktarın */}
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={menuItems} style={{ flex: 1 }} />
        <Button type="primary" icon={<LogoutOutlined />} onClick={handleLogout}>
          Çıkış
        </Button>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <Routes>
            <Route path="/admin/bookings" element={<Bookings />} />
            <Route path="/admin" element={<TodayBookings />} />
            <Route path='/admin/settings' element={<Settings/>}/>
          </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default AdminPage;
