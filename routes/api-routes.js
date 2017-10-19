
var db = require("../models");

module.exports = function(app){

  //POST to add new items to database
  app.post("/", function(req, res) {
    db.Burger.create({
      burger: req.body.burger, devour: false
    }).then(function(dbBurger){
      res.redirect("/");
    });
  });

  //Put method that updates the devour boolean from false to true
  app.put("/:id", function(req, res) {
    db.Burger.update({
      devour: true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger){
      res.redirect("/");
    })
  });
};

