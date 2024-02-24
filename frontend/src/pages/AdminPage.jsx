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
    // Örneğin localStorage'dan token silinebilir ve kullanıcı anasayfaya yönlendirilebilir
    localStorage.removeItem('token');
    window.location.href = "/";
  };

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', padding: '0 50px', justifyContent: 'space-between' }}>
  {/* ... */}
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ flex: 1 }}>
          <Menu.Item key="1"><Link to="/admin">Bookings</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/admin/bookings">Old Bookings</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/admin/settings">Settings</Link></Menu.Item>
        </Menu>
        <Button type="primary" icon={<LogoutOutlined />} onClick={handleLogout}>
          Çıkış
        </Button>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          {/* Route'lar burada tanımlanıyor */}
          <Routes>
            <Route path="/admin/bookings" element={<Bookings />} />
            <Route path="/admin" element={<TodayBookings />} />
            <Route path='/admin/settings' element={<Settings/>}/>
            {/* Diğer admin alt sayfalarınızın route'ları buraya eklenebilir */}
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
