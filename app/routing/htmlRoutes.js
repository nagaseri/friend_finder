//=================================================================================================
// DEPENDENCIES
//=================================================================================================
var path = require("path";)

//=================================================================================================
// ROUTING
//=================================================================================================
module.exports = function (app){
	//go to survey page when url ends with /survey
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "public/../survey.html"));
	});
	//go to home by default 
	app.use("/", function(req, res){
		res.sendFile(path.join(__dirname, "public/../home.html"));
	});
};