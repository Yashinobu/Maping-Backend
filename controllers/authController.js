// controllers/authController.js
const admin = require('../config/firebase');

exports.sendVerificationCode = async (req, res) => {
    const { phoneNumber } = req.body;
    try {
        const customToken = await admin.auth().createCustomToken(phoneNumber);
        res.status(200).json({ customToken });
    } catch (error) {
        res.status(500).send('Error sending verification code');
    }
};

exports.verifyCode = async (req, res) => {
    const { verificationCode, confirmationResult } = req.body;
    try {
        const result = await confirmationResult.confirm(verificationCode);
        res.status(200).json({ user: result.user });
    } catch (error) {
        res.status(500).send('Verification failed');
    }
};
