// config/firebase.js
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://mapping-dd0c6.firebaseio.com"
});

module.exports = admin;
