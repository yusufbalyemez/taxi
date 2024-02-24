import React from 'react';
import { Form, Input, Button, message } from 'antd';

const Settings = () => {
  const [emailForm] = Form.useForm();
  const [passwordForm] = Form.useForm();
  const [phoneForm] = Form.useForm();

  const updateEmail = (values) => {
    if (values.email !== values.confirmEmail) {
      message.error('E-posta adresleri eşleşmiyor!');
      return;
    }
    // E-posta güncelleme işlemi
    console.log('Güncellenen e-posta: ', values.email);
    message.success('E-posta başarıyla güncellendi!');
  };

  const updatePassword = (values) => {
    if (values.password !== values.confirmPassword) {
      message.error('Şifreler eşleşmiyor!');
      return;
    }
    // Şifre güncelleme işlemi
    console.log('Güncellenen şifre');
    message.success('Şifre başarıyla güncellendi!');
  };

  const updatePhone = (values) => {
    // Telefon numarası güncelleme işlemi
    console.log('Güncellenen telefon numarası: ', values.phone);
    message.success('Telefon numarası başarıyla güncellendi!');
  };

  return (
    <div>
      <Form form={emailForm} onFinish={updateEmail} layout="vertical">
        <Form.Item name="email" label="Yeni E-posta" rules={[{ required: true, message: 'Lütfen yeni e-posta adresinizi girin!', type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="confirmEmail" label="E-postayı Onayla" rules={[{ required: true, message: 'Lütfen e-posta adresinizi tekrar girin!', type: 'email' }]}>
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          E-posta Güncelle
        </Button>
      </Form>

      <Form form={passwordForm} onFinish={updatePassword} layout="vertical" style={{ marginTop: 20 }}>
        <Form.Item name="password" label="Yeni Şifre" rules={[{ required: true, message: 'Lütfen yeni şifrenizi girin!' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item name="confirmPassword" label="Şifreyi Onayla" rules={[{ required: true, message: 'Lütfen şifrenizi tekrar girin!' }]}>
          <Input.Password />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Şifre Güncelle
        </Button>
      </Form>

      <Form form={phoneForm} onFinish={updatePhone} layout="vertical" style={{ marginTop: 20 }}>
        <Form.Item name="phone" label="Yeni Telefon Numarası" rules={[{ required: true, message: 'Lütfen yeni telefon numaranızı girin!' }]}>
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Telefon Güncelle
        </Button>
      </Form>
    </div>
  );
};

export default Settings;
