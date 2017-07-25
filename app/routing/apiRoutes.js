//=================================================================================================
// LOAD DATA
//=================================================================================================
var friendData = require("../data/friends");

//=================================================================================================
// DEPENDENCIES
//=================================================================================================
var path = require("path");

//=================================================================================================
// ROUTING
//=================================================================================================
module.exports = function (app){
	//show friend JSON when url ends with /api/friends
	app.get("/api/friends", function(req, res){
		res.json(friendData);
	});
	//push data to database (friends.js) when url ends with /api/friends
	app.post("/api/friends", function(req, res){
		var user = req.body;
		var total = 0;
		for (var i = 0; i < user.scores.length;  i++){
			total += user.scores[i];
		}
		user.sum = total;
		var leastDifference = 10000;
		var bestMatch = "";
		for (var i = 0; i < friendData.length; i++){
			var difference = user.sum - friendData[i].sum;
			if(difference < leastDifference){
				leastDifference = difference;
				bestMatch = friendData[i].friendName;
			}
		}
		//push the new user input into the friendData array
		friendData.push(user);
	});
};