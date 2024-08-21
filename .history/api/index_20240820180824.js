const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./models/User');
const jwt = require('jsonwebtoken');

const port = 5000;
const saltRounds = 10;
const secret = 'gjalijajkasjgsirgreiosghkgnklang';

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://admin:admin123@cluster0.9nnhl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));

app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(saltRounds));
        const userDoc = await User.create({ username, password: hashedPassword });
        res.json(userDoc);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const userDoc = await User.findOne({ username });

        if (!userDoc) {
            alert("Invalid username or password")
            // return res.status(400).json('Invalid username or password');
        }

        const passOk = bcrypt.compareSync(password, userDoc.password);

        if (passOk) {
            jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
                if (err) throw err;
                res.json({ token });
            });
        } else {
            res.status(400).json('Invalid username or password');
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
