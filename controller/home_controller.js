const Todo=require('../model/todo');

module.exports.home=function(req,res){
      return res.render('home',{
          title:'TODO App'
      });
};

module.exports.add=function(req,res){
    Todo.create({
     description:req.body.description,
     category:req.body.category,
     date:req.body.date   
    },function(err,newTodo){
        if(err){
            console.log(`error in creating new entry:${err}`);
            return;
        }
        console.log('*************',newTodo);
    });
    return res.redirect('back');
}

module.exports.delete=function(req,res){
    console.log(req.body);
    return res.redirect('back');
}