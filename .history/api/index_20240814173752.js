const express = require('express');
const app = express();
const port= 5000;
app.get('/test', (req,res)=>{
res.send("hello world");
})
app.listen(port, (req,res)=>
{
    console.log(`Server is running on port ${port}`);
})