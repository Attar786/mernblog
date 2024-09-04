const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer  = require('multer')
const uploadMiddleware = multer({ dest: 'uploads/' })



const port = 5000;
const saltRounds = 10;
const secret = 'gjalijajkasjgsirgreiosghkgnklang';

app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(express.json());
app.use(cookieParser());


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
            // alert("Invalid username or password")
            // alert("Please enter a valid username");
            return res.status(400).json('Invalid username or password');
        }

        const passOk = bcrypt.compareSync(password, userDoc.password);

        if (passOk) {
            jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json({
                    id: userDoc._id,
                    username,
                });
                // res.json({ token });
            });
        } else {
            res.status(400).json('Invalid username or password');
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/profile', (req,res)=>{
    const {token} = req.cookies;
    // res.json(req.cookies);
    jwt.verify(token, secret, {}, (err,info) => {
        if(err) throw err;
        res.json(info);
    })
})

app.post('/logout', (req,res)=>
{
 res.cookie('token', '').json('ok'); 
})

app.post('/post',uploadMiddleware.single(file),(req,res)=> {

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
