// UserController.js

// Define the controller functions
const UserController = {
    index: (req, res) => {
      // Logic for the home page
      res.render('home'); // Render the "home" EJS template
    },
    about: (req, res) => {
      // Logic for the about page
      res.render('about'); // Render the "about" EJS template
    },
    profile: (req, res) => {
      // Logic for the profile page
      res.render('profileSection'); // Render the "profile" EJS template
    },
    ask: (req, res) => {
      // Logic for the ask page
      res.render('ask'); // Render the "ask" EJS template
    },
    discover: (req, res) => {
      // Logic for the discover page
      res.render('discover'); // Render the "discover" EJS template
    },
    answer: (req, res) => {
        // Logic for the discover page
        res.render('answer'); // Render the "discover" EJS template
    },
  };
  
  // Export the controller functions
  module.exports = UserController;
  