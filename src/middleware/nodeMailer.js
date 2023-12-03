const nodemailer = require("nodemailer");

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true, // true para 465, false para otros puertos
      auth: {
        user: "juancarlos@jc-sportclub.com",
        pass: "JC-SportAdmin23",
      },
    });
  }

  sendMail(text) {
    const mailOptions = {
      from: "registros@jc-sportclub.com",
      to: "juancarlos@jc-sportclub.com",
      subject: "Registro de usuario",
      text,
    };

    return this.transporter.sendMail(mailOptions);
  }
}

module.exports = new MailService();
