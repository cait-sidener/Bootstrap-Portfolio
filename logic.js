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
      console.log(newContact.name);
      console.log(newContact.email);
      console.log(newContact.message);
    
      // Clears all of the text-boxes
    $("#name").val("");
    $("#email").val("");
    $("#message").val("");
  });

  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var contactName = childSnapshot.val().name;
    var email = childSnapshot.val().email;
    var message = childSnapshot.val().message;
  
    // Contact Info
    console.log(contactName);
    console.log(email);
    console.log(message);

  });
