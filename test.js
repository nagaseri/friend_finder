var friendData = require("./app/data/friends");
console.log(friendData);
var user = 
	{ 
		friendName: 'Eri',
  		friendPhoto: 'fji.dio',
  		scores: [ '1', '2', '1', '1', '5', '1', '3', '2', '1', '1' ] 
  	};
	var total = 0;
	for (var i = 0; i < user.scores.length;  i++){
		total += parseInt(user.scores[i]);
	}
	// console.log("total", total);
	user.sum = total;
	console.log("user.sum", user.sum);
	var leastDifference = 60;
	var bestMatchName = "";
	var bestMatchObject;
	for (var i = 0; i < friendData.length; i++){
		var difference = user.sum - friendData[i].sum;
		if(difference < leastDifference){
			leastDifference = difference;
			bestMatchName = friendData[i].friendName;
			bestMatchObject = friendData[i]
		}
	}
		console.log(leastDifference, "leastDifference")
		console.log("bestMatch", bestMatchName);
		// console.log(bestMatchObject);