const express = require('express');
const app = express();
const morgan = require('morgan');

// settings
app.set('port', process.env.PORT || 7000);
app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routers
//app.use('/',require('./index'));
app.use('/api/austro', require('./austro'));
 
// starting the server
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
})