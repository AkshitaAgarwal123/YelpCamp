var mongoose = require("mongoose");
var Campground  = require("./models/campground");
var Comment  = require("./models/comment");

var data = [
		   		{
		   			name: "Cloud's Rest", 
		   			image: "https://cdn.pixabay.com/photo/2016/11/22/23/08/adventure-1851092_960_720.jpg",
		   			description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
		   		},
		   		{
		   			name: "Desert Mesa", 
		   			image: "https://cdn.pixabay.com/photo/2013/10/09/02/26/coast-192979_960_720.jpg",
		   			description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
		   		},
		   		{
		   			name: "Canyon Floor", 
		   			image: "https://cdn.pixabay.com/photo/2015/04/20/13/10/rock-731140_960_720.jpg",
		   			description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
		   		}
];

function seedDB(){
	//Remove all campgrounds
	Campground.remove({}, function(err){
		if(err){
			console.log(err);
		}
		console.log("removed campground!");


		add a few campgrounds
		data.forEach(function(seed){
			Campground.create(seed, function(err, campground){
				if(err){
					console.log(err);
				} 
				else 
				{
					console.log("added a campground!");


					//create a comment
					Comment.create(
						{
							text: "This place is great, but I wish there was internet",
							author: "Homer"
						}, function(err, comment)
						{
							if(err){
								console.log(err);
							} 
							else 
							{
								campground.comments.push(comment);
								campground.save();
								console.log("created new comment!");
							}
						}
					);
				}
			});
		});

	});	
}

module.exports = seedDB;




