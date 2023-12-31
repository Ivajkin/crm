const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Set up default MongoDB connection string
const mongoURI = 'mongodb+srv://cluster67233.jejdnzy.mongodb.net/crm_db';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Get the default connection
const db = mongoose.connection;

// Event handlers for successful connection and error
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

// Set the port
const port = process.env.PORT || 3000;

const path = require('path');

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, 'client/build')));

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, '../crm-frontend/build')));

// Handle requests for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../crm-frontend/build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);
