import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Breadcrumb, Layout, Menu, theme, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons'; // Çıkış ikonu
import Bookings from '../components/Admin/Bookings';

const { Header, Content, Footer } = Layout;

const items = [
  { key: '1', label: (<Link to="/admin">Home</Link>) },
  { key: '2', label: (<Link to="/bookings">Bookings</Link>) },
  { key: '3', label: (<Link to="/users">Users</Link>) },
];

const AdminPage = () => {
  const navigate = useNavigate(); // Yönlendirme için hook
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleLogout = () => {
    // Çıkış işlemleri burada yapılabilir
    // navigate('/'); // Anasayfaya yönlendir
    window.location.href = "/";
  };

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
        <Button
          type="primary"
          icon={<LogoutOutlined />}
          onClick={handleLogout}
          style={{ marginLeft: 'auto' }} // Sağa yaslama
        >
          Çıkış
        </Button>
      </Header>
      <Content style={{ padding: '0 10px' }}>
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              background: colorBgContainer,
              minHeight: 280,
              padding: 12,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/bookings" element={<Bookings/>} />
              {/* Diğer route'larınız buraya */}
            </Routes>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
 
  );
};

export default AdminPage;
