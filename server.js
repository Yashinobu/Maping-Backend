const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // Parse JSON bodies

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api', apiRoutes);

// Register routes
app.use('/auth', authRoutes);

// Test Routes
app.get('/api/test', (req, res) => {
    res.send({ message: 'Hello from Express backend!' });
});

// Error handling middleware
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
