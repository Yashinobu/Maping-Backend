const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // Parse JSON bodies

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api', apiRoutes);

// Error handling middleware
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
