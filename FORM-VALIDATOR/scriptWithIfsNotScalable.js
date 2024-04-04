const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText= message;
}

//Show input Success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

// Check email is valid
// Function to check if email is valid
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

//Event Listeners
form.addEventListener('submit', e => {
    e.preventDefault();

    // Check if username is empty
    if(username.value === ''){
        showError(username,'Username is required');
    }else{
        showSuccess(username);
    }

     // Check if email is empty or invalid
    if(email.value === ''){
        showError(email,'Email is required');
    }else if(!isValidEmail(email.value)){
        showError(email, 'Email is not valid');
    }else{
        showSuccess(email);
    }
    
    // CHeck if password is not empty
    if(password.value === ''){
        showError(password,'Password is required');
    }else{
        showSuccess(password);
    }
    // Check if the password 2 is not empty   
    if(password2.value === ''){
        showError(password2,'Password is required');
    }else{
        showSuccess(password2);
    }
});
