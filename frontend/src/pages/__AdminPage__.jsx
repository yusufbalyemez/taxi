import React, { useState } from 'react';
import { Layout, Menu, Button, Dropdown } from 'antd';
import {
  UserOutlined,
  MoreOutlined,
} from '@ant-design/icons';
import Bookings from '../components/Admin/Bookings';

const { Header, Content, Footer } = Layout;

const AdminPage = () => {
  const [selectedMenu, setSelectedMenu] = useState('1');

  const onMenuClick = (e) => {
    setSelectedMenu(e.key);
  };

  const menu = (
    <Menu onClick={onMenuClick} selectedKeys={[selectedMenu]}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        All Bookings
      </Menu.Item>
      {/* Diğer menü öğeleri buraya ekleyebilirsiniz */}
    </Menu>
  );

  const renderContent = () => {
    switch (selectedMenu) {
      case '1':
        return <Bookings />;
      // Diğer sayfalar için aynı şekilde devam edebilirsiniz
      default:
        return 'İçerik buraya gelecek.';
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="logo">
          <Button type="link" onClick={() => setSelectedMenu('1')}>
            All Bookings
          </Button>
        </div>
        <Dropdown overlay={menu} trigger={['click']} className="mobileVisible">
          <Button icon={<MoreOutlined />} />
        </Dropdown>
      </Header>
      <Content style={{ margin: '0 16px' }}>
        <div style={{ padding: 24, minHeight: 360, background: '#fff' }}>
          {renderContent()}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
};

export default AdminPage;
