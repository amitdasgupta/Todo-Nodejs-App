const express=require('express');
const port=8000;
const app=express();
// set up view engine
app.set('view engine','ejs');
app.set('views','./view')

app.use('/',require('./routes'));
app.use(express.static('./assets'))

app.listen(port,function(err){
   if(err){
       console.log(`error:${err}`);
       return;
   }
   console.log(`server running at port:${port}`);
});