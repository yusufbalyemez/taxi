import React, { useEffect, useState } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { Layout, Menu, Button, message, Spin, Flex } from 'antd'; // Spin componentini import ediyoruz
import { LogoutOutlined } from '@ant-design/icons';
import { useLanguage } from '../components/Languages/LanguageContext';

const { Header, Content, Footer } = Layout;

const AdminPage = () => {
  const [isLoading, setIsLoading] = useState(true); // Yükleme durumu state'i
  const navigate = useNavigate();

  const { language } = useLanguage(); // Dil bağlamından dil bilgisini al
  const text = language.adminpage; // Navbar metinlerine erişim

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
    { label: <Link to="/admin">{text.menuItem1}</Link>, key: '1' },
    { label: <Link to="/admin/bookings">{text.menuItem2}</Link>, key: '2' },
    { label: <Link to="/admin/settings">{text.menuItem3}</Link>, key: '3' },
    { label: <Link to="/admin/gallery-settings">Gallery Settings</Link>, key: '4' },
  ];

  if (isLoading) {
    return <Spin size="large" />; // Token kontrolü tamamlanana kadar yükleme göstergesini göster
  }

  // isLoading false ise, yani token kontrolü tamamlanmışsa içerik gösterilir
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={menuItems} style={{width:'100%'}} />
        <Button type="primary" icon={<LogoutOutlined />} onClick={handleLogout}>{text.logoutBtn}</Button>
      </Header>
      <Content>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <Outlet /> {/* Çocuk route'lar burada render edilecek */}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ©{new Date().getFullYear()} Created by Yusuf Balyemez
      </Footer>
    </Layout>
  );
};

export default AdminPage;
