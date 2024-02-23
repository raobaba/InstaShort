import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("LoL")
})

app.listen(3000,()=>{
    console.log('Server is running')
})