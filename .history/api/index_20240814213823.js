const express = require('express');
const app = express();
const cors = require('cors')

const port= 5000;

app.use(cors());
app.use(express.json()); 
app.post('/register', (req,res)=>{
    const {username,password} = req.body;
    res.json({username:username,password:password});
res.json("Atta ur Rehman");
})
app.listen(port, (req,res)=>
{
    console.log(`Server is running on port ${port}`);
})