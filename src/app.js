const express = require('express');
const app = express();
const port = 9000;

// dependencies
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('morgan');
const router = require('./routes/routes');

// database
const uri= 'mongodb+srv://cyberspacedk:010203@cluster0-r6l9q.mongodb.net/Sculptor?retryWrites=true';
mongoose.connect(uri,{useNewUrlParser:true}).then((data)=>console.log("CONNECTED")).catch(err=>console.log(err))

// middleware
app.use(logger('tiny'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors()); 


// routes
app.use('/', express.static('public'));

app.use('/api', router);   

// response
app.get('/', (req,res)=>{
    res.send('WORK')
});


app.listen(port, ()=>console.log('SERVER START AT PORT', port));