const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://admin:admin123@cluster0.9nnhl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    res.json({ requestData: { username, password }, message: "Atta ur Rehman" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
