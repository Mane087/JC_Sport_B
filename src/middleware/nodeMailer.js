const nodemailer = require('nodemailer');

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'manealaniz95@gmail.com',
        clientId: '--',
        clientSecret: '--',
        refreshToken: '---'
      }
    });
  }

  sendMail(text) {
    const mailOptions = {
      from: 'manealaniz95@gmail.com',
      to: 'juancarlosjcsport@gmail.com',
      subject: 'Registro de usuario',
      text,
    };

    return this.transporter.sendMail(mailOptions);
  }
}

module.exports = new MailService();

