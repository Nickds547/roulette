const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (req,res) =>{
    res.send('Express + Typescript Server');
})

app.listen(PORT, () =>{
    console.log(`[server]: Server is running on https://${PORT}`);
})