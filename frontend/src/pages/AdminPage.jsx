import React, { useEffect, useState } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { Layout, Menu, Button, message, Spin } from 'antd'; // Spin componentini import ediyoruz
import { LogoutOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const AdminPage = () => {
  const [isLoading, setIsLoading] = useState(true); // Yükleme durumu state'i
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      message.error('Bu sayfaya erişmek için giriş yapmalısınız.');
      //navigate('/');
      window.location.href = "/"
    } else {
      setIsLoading(false); // Token varsa yükleme durumunu false yaparak içeriği göster
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const menuItems = [
    { label: <Link to="/admin">Bookings</Link>, key: '1' },
    { label: <Link to="/admin/bookings">Old Bookings</Link>, key: '2' },
    { label: <Link to="/admin/settings">Settings</Link>, key: '3' },
  ];

  if (isLoading) {
    return <Spin size="large" />; // Token kontrolü tamamlanana kadar yükleme göstergesini göster
  }

  // isLoading false ise, yani token kontrolü tamamlanmışsa içerik gösterilir
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', padding: '0 50px', justifyContent: 'space-between' }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}  style={{ flex: 1 }} items={menuItems} />
        <Button type="primary" icon={<LogoutOutlined />} onClick={handleLogout}>Çıkış</Button>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <Outlet /> {/* Çocuk route'lar burada render edilecek */}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default AdminPage;
