// utils/validators.js
exports.isValidPhoneNumber = (phoneNumber) => {
    return /^\+\d{1,15}$/.test(phoneNumber);
};
