/* Use this area for pseudo - coding:
// need variables to capture button, and inputs for  name and e-Email
//button event listeners
//.value of inputs
//store the values in an object
//give object a key "logininfo"


*/

// Query selectors
var nameBlah = document.querySelector('#name');
var email = document.querySelector('#email');
var addContactBtn = document.querySelector('#register-btn');




// Event listeners
addContactBtn.addEventListener('click', saveContactInfo);



// Functions

function createObject() {
var personalInfo =  { userName: nameBlah.value, userEmail: email.value };
return personalInfo;
}
