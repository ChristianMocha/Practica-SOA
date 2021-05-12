const express = require('express');
const app = express();
const morgan = require('morgan');

// settings
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routers
app.use(require('./routes/index'));
app.use('/api/jeep', require('./routes/jeep'));

 
// starting the server
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
})