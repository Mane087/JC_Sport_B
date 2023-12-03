// routes/mailRoutes.js
const express = require('express');
const router = express.Router();
const MailController = require('../controllers/mailController');

router.post('/sendMail', MailController.send);

module.exports = router;
