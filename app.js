
//get a new Object (the archtecture does not require 'new' keyword)
var g = G$('john','Doe');

//use chainable methods
g.greet().setLang('es').greet(true);

//use object on the click of the login button
$('#login').click(function(){
  
  //create a new 'Greetr' object
  var loginGreetr = G$('John', 'Doe');

  //hide the login on the screen
  $('#logindiv').hide();

  //use HTMLGreeting method, passing the '#greeting' as the selector and 
  //the chosen language, and console.log the greeting as well.
  loginGreetr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});


