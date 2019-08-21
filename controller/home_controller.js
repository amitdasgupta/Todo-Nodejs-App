module.exports.home=function(req,res){
      return res.render('home',{
          title:'TODO App'
      });
};

module.exports.add=function(req,res){
    console.log(req.body.description);
    return res.redirect('back');
}

module.exports.delete=function(req,res){
    console.log(req.body);
    return res.redirect('back');
}