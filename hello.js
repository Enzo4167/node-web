const express = require('express');
const app = express();

app.get('/hello', (request, e)=>{
    console.log('Hello world!!');
    e.send('Hello world from server');
});
app.listen(4000);