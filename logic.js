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

  // User Validation

// function validateZipCode(zip) {
//   // our regular exp...
//   var zipRegExp = /(^\d{5}$)|(^\d{5}-\d{4}$)/

//   if (zip === '') {
//       return {
//           status: false,
//           error: 'Zipcode field cannot be empty!'
//       }
//   }

//   if (!zipRegExp.test(zip)) {
//       return {
//           status: false,
//           error: zip + ' is not a valid zipcode!'
//       }
//   }

//   return {
//       status: true,
//       error: null
//   }
// }

// // Add event listener for on submit event
// $zipSubmit.on("click", function (evt) {
//   // Get the value of our zip field
//   zip = document.getElementById('zip-input').value.trim()

//   // remove any prev error msg
//   zipError.textContent = ''

//   // use our zip validation function
//   var isValid = validateZipCode(zip)

//   // check the status of our validation
//   // notice the ! symbol, if 'is not true' then we execute the if block.
//   if (!isValid.status) {
//       // prevent form from been submitted
//       evt.preventDefault()

//       // show error msg
//       zipError.textContent = isValid.error

//       // exit the function and prevent form from been submitted in older browsers
//       return false
//   }

//   // older browsers need true as return value to submit the form
//   // return true

//   getWeather();
// })
