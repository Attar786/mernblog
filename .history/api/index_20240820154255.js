const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User  = require('./models/User');

const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://admin:admin123@cluster0.9nnhl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    await User.Create({username, password});
    res.json({ requestData: { username, password }, message: "Atta ur Rehman" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
