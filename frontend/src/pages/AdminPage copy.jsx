import React, { useState } from 'react';
import Bookings from '../components/Admin/Bookings';
import { Layout, Menu, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('');

  // Sider'ın breakpoint'te gizlenip gizlenmeyeceğini kontrol etmek için
  const onCollapse = (collapsed, type) => {
    if (type === 'clickTrigger' || type === 'responsive') {
      setCollapsed(collapsed);
    }
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onMenuClick = e => {
    setSelectedMenu(e.key);
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case '1':
        return <Bookings />;
      case '2':
        return 'Burası Option 2 Page content';
      case '3':
        return 'Burası Option 3 Page content';
      default:
        return 'İçerik buraya gelecek.';
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={onCollapse} 
        breakpoint="lg" 
        onBreakpoint={broken => { setCollapsed(broken); }}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={onMenuClick}>
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            All Bookings
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.Item key="3" icon={<FileOutlined />}>
            Option 3
          </Menu.Item>
          {/* Diğer menü öğeleri buraya */}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggleCollapsed,
            style: { fontSize: '18px', padding: '0 24px' },
          })}
          <div>Admin Paneli</div>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24, minHeight: 360, background: '#fff' }}>
            {renderContent()}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
