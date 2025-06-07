const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// E-posta gönderme fonksiyonu
const sendEmail = async (emailData) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL,
    subject: 'Yeni İletişim Formu Mesajı',
    html: `
      <h2>Yeni İletişim Formu Mesajı</h2>
      <p><strong>Gönderen:</strong> ${emailData.name}</p>
      <p><strong>E-posta:</strong> ${emailData.email}</p>
      <p><strong>Mesaj:</strong></p>
      <p>${emailData.message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('E-posta gönderme hatası:', error);
    return false;
  }
};

// İletişim formu gönderimi
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Tüm alanları doldurun' });
  }

  try {
    const emailSent = await sendEmail({ name, email, message });
    
    if (emailSent) {
      res.status(200).json({ message: 'Mesajınız başarıyla gönderildi' });
    } else {
      res.status(500).json({ message: 'Mesaj gönderilirken bir hata oluştu' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

module.exports = router; 