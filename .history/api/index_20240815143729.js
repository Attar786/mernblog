const express = require('express');
const app = express();
const cors = require('cors')

const port= 5000;

app.use(cors());
app.use(express.json()); 
app.post('/register', (req,res)=>{
    const {username,password} = req.body;
    res.json({requestData: {username,password}});
res.json("Atta ur Rehman");
})


//mongodb+srv://admin:admin123@cluster0.9nnhl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

app.listen(port, (req,res)=>
{
    console.log(`Server is running on port ${port}`);
})