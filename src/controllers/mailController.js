// controllers/MailController.js
const MailService = require("../middleware/nodeMailer");

class MailController {
  async send(req, res) {
    try {
      await MailService.sendMail(req.body.text);
      res.json({ message: "Correo enviado" });
    } catch (error) {
      res.status(500).json({ message: "Error al enviar el correo", error });
    }
  }
}

module.exports = new MailController();
