const Todo = require("../model/todo");

// To render homepage
module.exports.home = function(req, res) {
  Todo.find({}, function(err, todo) {
    if (err) {
      console.log("error fetching data");
      return;
    }
    return res.render("home", {
      title: "TODO App",
      todo_list: todo
    });
  });
};

// To add a item to list
module.exports.add = function(req, res) {
  Todo.create(
    {
      description: req.body.description,
      category: req.body.category,
      date: req.body.date
    },
    function(err, newTodo) {
      if (err) {
        console.log(`error in creating new entry:${err}`);
        return;
      }
      return res.json(newTodo);
    }
  );
};

// To delete a item from list
module.exports.delete = function(req, res) {
  Todo.deleteMany(
    {
      _id: {
        $in: JSON.parse(req.body.items)
      }
    },
    function(err, todo) {
      if (err) {
        console.log("cannot delete items", err);
      }
      return res.json(todo);
    }
  );
};
