// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route for sending the verification code
router.post('/send-verification-code', authMiddleware, authController.sendVerificationCode);

// Route for verifying the code
router.post('/verify-code', authController.verifyCode);

module.exports = router;
