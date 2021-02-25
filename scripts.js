
// Query selectors
var addContactBtn = document.querySelector('#register-btn');
var displayBtn = document.querySelector('#display-btn');
var yourName = document.querySelector('#name');
var email = document.querySelector('#email');
var displayArea = document.querySelector('.display-area');



// Event listeners
addContactBtn.addEventListener('click', storeInfo)
displayBtn.addEventListener('click', getSavedInfo)



// Functions
function storeInfo() {
  var login = {userName: yourName.value, userEmail: email.value};
  var loginString = JSON.stringify(login);
  localStorage.setItem('info', loginString);
}

function getSavedInfo() {
  var retrieveLogin = localStorage.getItem('info');
  var loginString = JSON.parse(retrieveLogin);
  displayArea.innerText = `E-Mail:${loginString.userEmail} Username:${loginString.userName}`;

}
