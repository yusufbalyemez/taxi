import React, { useState, useEffect } from 'react';
import { useLanguage } from '../Languages/LanguageContext'; // useLanguage hook'unu içe aktarın
import { useAdminUser } from './AdminUserContext';
import { Form, Input, Button, message } from 'antd';
import "./Settings.css";

const Settings = () => {

  const { adminUserId } = useAdminUser(); // UserContext'ten adminUserId'yi al
  const { language } = useLanguage(); // Dil bağlamından dil bilgisini al
  const text = language.adminpage.settings; // Metinlere erişim

  const settingsId = "65ddc2d4a40774d978774d55"

  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const [emailForm] = Form.useForm();
  const [passwordForm] = Form.useForm();
  const [phoneForm] = Form.useForm();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); // Telefon durumu için yeni bir useState

  // Kopyalama veya yapıştırma işlemini engelleyen fonksiyon
  const preventCopyPaste = (event) => {
    event.preventDefault();
    message.error('Kopyalama ve yapıştırma işlemi bu alanda engellenmiştir.');
  };

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/settings`);
        if (!response.ok) {
          throw new Error('Settings could not be fetched!');
        }
        const data = await response.json();
        setEmail(data.email); // E-posta durumunu güncelle
        setPhone(data.phone); // Telefon durumunu güncelle
        emailForm.setFieldsValue({ email: data.email }); // E-posta form alanını güncelle
        emailForm.setFieldsValue({ confirmEmail: data.email }); // E-posta form alanını güncelle
        phoneForm.setFieldsValue({ phone: data.phone }); // Telefon form alanını güncelle
      } catch (error) {
        message.error('Failed to fetch settings');
      }
    };

    fetchSettings();
  }, [apiUrl, emailForm, phoneForm]);



  //Admin şifresini güncelleme
  const updateAdminPassword = async (adminUserId, values) => {
    if (values.password !== values.confirmPassword) {
      message.error(text.passwordErrorMsg);
      return;
    }

    try {
      // API URL'nizi .env dosyasından alıyoruz


      // Fetch API kullanarak sunucuya PATCH isteği atıyoruz
      const response = await fetch(`${apiUrl}/api/auth/update/${adminUserId}`, {
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
    updateAdminPassword(adminUserId, values);
  };


  //Admin şifresini güncelleme
  const updateAdminPhone = async (settingsId,values) => {
    if (values.phone === '') {
      message.error('telefon alanı boş olmaz');
      return;
    }


    try {
      // API URL'nizi .env dosyasından alıyoruz


      // Fetch API kullanarak sunucuya PATCH isteği atıyoruz
      const response = await fetch(`${apiUrl}/api/settings/${settingsId}`, {
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
    updateAdminPhone(settingsId, values);
  };

  //Admin şifresini güncelleme
  const updateAdminMail = async (settingsId,values) => {
    if (values.email !== values.confirmEmail) {
      message.error('email alanı boş olmaz');
      return;
    }


    try {
      // API URL'nizi .env dosyasından alıyoruz


      // Fetch API kullanarak sunucuya PATCH isteği atıyoruz
      const response = await fetch(`${apiUrl}/api/settings/${settingsId}`, {
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

  const onFinishMail = (values) => {
    //updateAdminMail fonksiyonunu çağır
    updateAdminMail(settingsId,values);
  };


  return (
    <div>
      {/* Mevcut e-posta adresini göster */}
      <div className="no-text-transform" style={{ marginBottom: '16px' }}>
        <label><strong>Şuanki Mail: </strong>{email}</label>
      </div>

      <Form form={emailForm} onFinish={onFinishMail} layout="vertical">
        <Form.Item name="email" className='no-capitalize' label={text.form.emailLabel} rules={[{ required: true, message: text.form.emailMsg, type: 'email' }]}>
          <Input onPaste={preventCopyPaste} onCopy={preventCopyPaste} />
        </Form.Item>
        <Form.Item name="confirmEmail" className='no-capitalize' label={text.form.confirmEmailLabel} rules={[{ required: true, message: text.form.confirmEmaişMsg, type: 'email' }]}>
          <Input onPaste={preventCopyPaste} onCopy={preventCopyPaste} />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          {text.form.updateMailBtn}
        </Button>
      </Form>

      <Form form={passwordForm} onFinish={onFinishPassword} layout="vertical" style={{ marginTop: 20, textTransform: 'none !important' }}>
        <Form.Item name="password" className='no-capitalize' label={text.form.passwordLabel} rules={[{ required: true, message: text.form.passwordMsg }]}>
          <Input.Password onPaste={preventCopyPaste} onCopy={preventCopyPaste}/>
        </Form.Item>
        <Form.Item name="confirmPassword" className='no-capitalize' label={text.form.confirmPasswordLabel} rules={[{ required: true, message: text.form.confirmPasswordMsg }]}>
          <Input.Password onPaste={preventCopyPaste} onCopy={preventCopyPaste}/>
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
