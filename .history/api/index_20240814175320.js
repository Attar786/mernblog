const express = require('express');
const app = express();
const port= 5000;
app.get('/register', (req,res)=>{
res.json("Atta ur Rehman");
})
app.listen(port, (req,res)=>
{
    console.log(`Server is running on port ${port}`);
})