var express       = require("express");
var router        = express.Router({mergeParams: true});
var Campground 	  =	require("../models/campground");


router.get("/", function(req, res){
	// get all campgrounds from db
	Campground.find({}, function(err, allcampgrounds){
		if(err){
			console.log(err);
		}
		else{
			res.render("campgrounds/index", {campgrounds: allcampgrounds, currentUser: req.user});
		}
	});
});

router.post("/", isLoggedIn, function(req, res){
	//get data from form and add to campgrounds array
	var name   = req.body.name;
	var image  = req.body.image;
	var desc   = req.body.description;
	var author = {
		id: req.user._id,
		username: req.user.username
	};
	var newCampground = {name: name, image: image, description: desc, author: author};
	Campground.create(newCampground, function(err, newlyCreated){
		if(err){
			console.log(err);
		}
		else{
			res.redirect("/campgrounds");
		}
	});
});

router.get("/new", isLoggedIn, function(req, res){
	res.render("campgrounds/new");
});

router.get("/:id", function(req, res){	
	//find campground with providec id
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		if(err){
			console.log(err);
		}
		else{
			res.render("campgrounds/show", {campground: foundCampground});
		}
	});
	//render show template with that campground);
	
});

//edit campground route
router.get("/:id/edit", checkCampgroundOwnership, function(req, res){
	// is user logged in
	//does user owns the campground
	Campground.findById(req.params.id, function(err, foundCampground){
		res.render("campgrounds/edit", {campground: foundCampground});
	});
});

//update campground route
router.put("/:id", checkCampgroundOwnership, function(req, res){
	Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
		if(err){
			console.log(err);
			res.redirect("/campgrounds");
		}
		else{
			res.redirect("/campgrounds/" + req.params.id);
		}
	});

});

//delete campground route
router.delete("/:id", checkCampgroundOwnership, function(req, res){
	Campground.findByIdAndRemove(req.params.id, function(err){
		if(err){
			console.log(err);
			res.redirect("/campgrounds" + req.params.id);
		}
		else{
			res.redirect("/campgrounds");
		}
	});
});



//middleware
function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}

function checkCampgroundOwnership(req, res, next){
	if(req.isAuthenticated()){
		Campground.findById(req.params.id, function(err, foundCampground){
			if(err){
					console.log(err);
					res.redirect("back");
			}
			else{
					//if(foundCampground.author.id == req.user._id){  (object!= string)
				if((foundCampground.author.id).equals(req.user._id)){
					next();
				} else{
					res.redirect("back")
				}	
					
			}
		});
	} else{
		res.redirect("back");
	}
}

module.exports = router;