
var db = require("../models");

module.exports = function(app){
  //GET to populate page
  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger){
      res.json(dbBurger);
    })
  });


  //POST to add new items to database
  app.post("/", function(req, res) {
    db.Burger.create({
      burger: req.body.burger
    }).then(function(dbBurger){
      res.json(dbBurger);
    });
  });

  //Put method that updates the devour boolean from false to true
  app.put("/:id", function(req, res) {
    db.Burger.update({
      devour: true
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbBurger){
      res.json(dbBurger);
    })
  });
};

