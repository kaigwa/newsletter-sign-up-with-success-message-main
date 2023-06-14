const form = document.querySelector('form');
const email = document.getElementById('mail');
const errorMessage = document.querySelector('#mail + span.error');
const submit = document.getElementById('btn');
const successContainer = document.querySelector('.success');
const mainContainer = document.querySelector('.container');


email.addEventListener('input', () => {
    if (email.validity.valid) {
        errorMessage.textContent = '';
        errorMessage.className = 'error';
    }else{
        // showError();
    }
})


form.addEventListener("submit", (e) => {
    if (!email.validity.valid) {
        showError();
        e.preventDefault();
    }
});


function showError(){
    if (email.validity.valueMissing) {
        // If the field is empty,
        // display the following error message.
        errorMessage.textContent = "Please! Enter email address.";
      } else if (email.validity.typeMismatch) {
        // If the field doesn't contain an email address,
        // display the following error message.
        errorMessage.textContent = "Valid email required.";
      }
    //   emailError.className = "error active";
}  



// // call on submit button and manipuration of container pages
// submit.addEventListener('click', () => {
//     successContainer.classList.remove('hidden')
//     mainContainer.style.display = 'none';
// }); 
  
