//displayed container(main) & hidden container(success)
const mainContainer = document.querySelector('.container');
const successContainer = document.querySelector('.success');

// form / email input / alert for invalid email
// const form = document.querySelector('form');
const emailInput = document.getElementById('mail');
const invalidEmail = document.getElementById('invalid');

// user email display span / submiBtn / dismissBtn
const users = document.getElementById('user');
const submit = document.getElementById('btn');
const dismissBtn = document.getElementById('dismiss');


function success(){
    successContainer.classList.add('active');
    mainContainer.classList.add('success');
}

function validateEmail(email){
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return emailRegex.test(email)
}

submit.addEventListener('click', (e) =>{
    e.preventDefault();
    const email = emailInput.value.trim();

    if (validateEmail(email)) {
        success()
        users.innerHTML = email
        emailInput.value = ''

        invalidEmail.classList.remove('active')
        emailInput.classList.remove('active')
    }else{
        invalidEmail.classList.add('active')
        emailInput.classList.add('active')
    }
})

dismissBtn.addEventListener('click', () => {
    mainContainer.classList.remove('success');
    successContainer.classList.remove('active');
    
})
