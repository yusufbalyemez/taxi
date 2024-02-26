import React from 'react';
import { useLanguage } from '../Languages/LanguageContext'; // useLanguage hook'unu içe aktarın
import { Form, Input, Button, message } from 'antd';
import "./Settings.css"

const Settings = () => {

  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const userId = "65dc603dae70ebff4beb1a51"; // Gerçek kullanıcı ID'nizi buraya ekleyin

  const { language } = useLanguage(); // Dil bağlamından dil bilgisini al
  const text = language.adminpage.settings; // Navbar metinlerine erişim

  const [emailForm] = Form.useForm();
  const [passwordForm] = Form.useForm();
  const [phoneForm] = Form.useForm();



  //Admin şifresini güncelleme
  const updateAdminPassword = async (userId, values) => {
    if (values.password !== values.confirmPassword) {
      message.error(text.passwordErrorMsg);
      return;
    }
  
    try {
      // API URL'nizi .env dosyasından alıyoruz
    
  
      // Fetch API kullanarak sunucuya PATCH isteği atıyoruz
      const response = await fetch(`${apiUrl}/api/auth/update/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          // Eğer bir yetkilendirme token'ı gerekiyorsa, aşağıdaki satırı ekleyin
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          password: values.password
        })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Yanıtı JSON olarak alıyoruz
      const result = await response.json();
      message.success(text.passwordUpdatedMsg);
  
    } catch (error) {
      message.error(text.passwordCantUpdated);
    }
  };

  const onFinishPassword = (values) => {
    // updateAdminPassword fonksiyonunu çağır
    updateAdminPassword(userId, values);
  };


   //Admin şifresini güncelleme
   const updateAdminPhone = async (userId, values) => {
    if (values.phone === '') {
      message.error('telefon alanı boş olmaz');
      return;
    }

 
    try {
      // API URL'nizi .env dosyasından alıyoruz
    
  
      // Fetch API kullanarak sunucuya PATCH isteği atıyoruz
      const response = await fetch(`${apiUrl}/api/auth/updatephone/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          // Eğer bir yetkilendirme token'ı gerekiyorsa, aşağıdaki satırı ekleyin
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          phone: values.phone
        })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Yanıtı JSON olarak alıyoruz
      const result = await response.json();
      message.success('tel güncelleme ok');
  
    } catch (error) {
      message.error('tel güncellenirken hata oldu');
    }
  };

  const onFinishPhone = (values) => {
    // updateAdminPhone fonksiyonunu çağır
    updateAdminPhone(userId, values);
  };

   //Admin şifresini güncelleme
   const updateAdminMail = async (userId, values) => {
    if (values.email !== values.confirmEmail) {
      message.error('email alanı boş olmaz');
      return;
    }

 
    try {
      // API URL'nizi .env dosyasından alıyoruz
    
  
      // Fetch API kullanarak sunucuya PATCH isteği atıyoruz
      const response = await fetch(`${apiUrl}/api/auth/updatemail/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          // Eğer bir yetkilendirme token'ı gerekiyorsa, aşağıdaki satırı ekleyin
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          email: values.email
        })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Yanıtı JSON olarak alıyoruz
      const result = await response.json();
      message.success('mail güncelleme ok');
  
    } catch (error) {
      message.error('mail güncellenirken hata oldu');
    }
  };

  const onFinishMail = (values)=>{
      //updateAdminMail fonksiyonunu çağır
      updateAdminMail(userId,values);
  };


  return (
    <div>
      <Form form={emailForm} onFinish={onFinishMail} layout="vertical">
        <Form.Item name="email" className='no-capitalize' label={text.form.emailLabel} rules={[{ required: true, message: text.form.emailMsg, type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="confirmEmail" className='no-capitalize'  label={text.form.confirmEmailLabel} rules={[{ required: true, message: text.form.confirmEmaişMsg, type: 'email' }]}>
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          {text.form.updateMailBtn}
        </Button>
      </Form>

      <Form form={passwordForm}  onFinish={onFinishPassword} layout="vertical" style={{ marginTop: 20, textTransform: 'none !important' }}>
        <Form.Item name="password" className='no-capitalize'  label={text.form.passwordLabel} rules={[{ required: true, message: text.form.passwordMsg }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item name="confirmPassword" className='no-capitalize' label={text.form.confirmPasswordLabel} rules={[{ required: true, message: text.form.confirmPasswordMsg }]}>
          <Input.Password />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          {text.form.updatePasswordBtn}
        </Button>
      </Form>

      <Form form={phoneForm} onFinish={onFinishPhone} layout="vertical" style={{ marginTop: 20 }}>
        <Form.Item name="phone" label={text.form.phoneLabel} rules={[{ required: true, message: text.form.phoneMsg }]}>
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          {text.form.updatePhoneBtn}
        </Button>
      </Form>
    </div>
  );
};

export default Settings;
