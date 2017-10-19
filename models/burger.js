module.exports = function(sequelize, DataTypes){
	var Burger = sequelize.define("Burger", {
		burger: DataTypes.STRING,
		devour: DataTypes.BOOLEAN
	})
};