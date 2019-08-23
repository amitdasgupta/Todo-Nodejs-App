const express=require('express');
const port= process.env.PORT || 8080;
const app=express();

const db=require('./config/mongoose');

//body parser
var bodyParser = require('body-parser')

// set up view engine
app.set('view engine','ejs');
app.set('views','./view')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/',require('./routes'));
app.use(express.static('./assets'))

app.listen(port,'0.0.0.0',function(err){
   if(err){
       console.log(`error:${err}`);
       return;
   }
   console.log(`server running at port:${port}`);
});