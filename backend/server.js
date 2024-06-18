require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;
const dbUrl = process.env.DB_URL;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(dbUrl);

// MongoDB schemas and models
const feedbackSchema = new mongoose.Schema({
  usability: Number,
  design: Number,
  performance: Number,
  suggestions: String
});

const userInfoSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  gender: String,
  phoneNumber: String
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
const UserInfo = mongoose.model('UserInfo', userInfoSchema);

// Routes
app.post('/submit-feedback', async (req, res) => {
  const { usability, design, performance, suggestions } = req.body;

  try {
    const feedback = new Feedback({ usability, design, performance, suggestions });
    await feedback.save();

    res.status(200).json({ message: 'Feedback submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit feedback' });
  }
});

app.post('/submit-user-info', async (req, res) => {
  const { fullName, email, gender, phoneNumber } = req.body;

  try {
    const userInfo = new UserInfo({ fullName, email, gender, phoneNumber });
    await userInfo.save();

    res.status(200).json({ message: 'User information submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit user information' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
