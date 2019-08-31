#YelpCamp
* Add landing page
* Add campground page that lists all campgrounds
	Each Campground has:
	- Name
	- Image
		[
  			{name: "Salmon Creek", image: "http://www.image.com"}
		]

#Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

#Creating new Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

#Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

#Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

#Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes

#Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Add a show route/template

#Refactor Mongoose Code
* Create a models directory
* use module.exports
* Require everything correctly!

#Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

#Add the Comment model!
* Make our errors go away!
* Display comments on our campground show page

#Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

#Style Show Page
* Add sidebar to the show page
* Display comments nicely

#Add User Model, Register, Login and Logout
* Install all packages needed for authentication
* Define User model
* Configure Passport
* Add register route
* Add register template
* Add login routes
* Add login template
* Add logout route
* Prevent user from adding comment if not signed in
* Add links to navbar
* Show/hide auth links in navbar correctly

#Refactor The Routes
* Use express router to recognize all routes
* Associate users and comments
* Save author's name to a comment automatically
* Prevent an unauthorized user from creating a campground
* Save username+id to newly created campground

#Editing Campgrounds
* Add Method-Override
* Add edit route for campgrounds
* Add link to edit page
* Add update route
* Fix $set problem

#Deleting Campgrounds
* Add destroy route
* Add delete button

#Authorization 
* User can only edit his/her own campground
* User can only delete his/her own campground
* Hide/Show edit and delete buttons

#Editing Comments
* Add edit route for comments
* Add edit button
* Add update route

#Deleting Comments
* Add destroy route
* Add delete button

#Authorization
* User can only edit his/her own comment
* User can only delete his/her own comment
* Hide/Show edit and delete buttons