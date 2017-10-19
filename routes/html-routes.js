var db = require("../models");

module.exports = function(app){
	//GET to populate page
	app.get("/", function(req, res) {
		db.Burger.findAll({}).then(function(dbBurger){
		  res.render("index", {burgers: dbBurger});
		})
	});
}


