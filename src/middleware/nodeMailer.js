const nodemailer = require('nodemailer');

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'manealaniz95@gmail.com',
        clientId: '243138539675-do4rc21rduc6o0uts6ubtn464af4rdeg.apps.googleusercontent.com',
        clientSecret: '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',
        refreshToken: '1//04pQjnW_r-J7gCgYIARAAGAQSNwF-L9IryFjm3I-Sp7lH4FcQ0QH0e-w8Umz5o_Dgj2x1EWedrGhT9kZmQxx4JTLn4eNgZmFuDhE'
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

