  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAF7wfydqfFneGqF6b7kghXLUYYo3mbap0",
    authDomain: "contact-page-75da6.firebaseapp.com",
    databaseURL: "https://contact-page-75da6.firebaseio.com",
    projectId: "contact-page-75da6",
    storageBucket: "contact-page-75da6.appspot.com",
    messagingSenderId: "752786569136"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

// 2. Button for adding Contact
$("#submit").on("click", function(event) {
    event.preventDefault();

    // Creates local "temporary" object for holding contact data
    var newContact = {
        name: $("#name").val(),
        email: $("#email").val(),
        message: $("#message").val()
      };
    
      // Uploads contact data to the database
      database.ref().push(newContact);

    
      
      // Clears all of the text-boxes
    $("#name").val("");
    $("#email").val("");
    $("#message").val("");
    alert("Thanks! Message sent!")



  });
