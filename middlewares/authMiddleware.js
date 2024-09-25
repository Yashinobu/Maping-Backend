// middlewares/authMiddleware.js
module.exports = (req, res, next) => {
    const { phoneNumber } = req.body;
    if (!phoneNumber || !/^\+\d{1,15}$/.test(phoneNumber)) {
        return res.status(400).send('Invalid phone number');
    }
    next();
};
