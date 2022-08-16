// * step-1. add click event handler in submit button
document.getElementById('btn-submit').addEventListener('click', function(event){
    // * step-2. get the email address 
    // ? always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // * step-3. get the passward 
    const passwordField = document.getElementById('user-password');
    const passward = passwordField.value;

    // ! Danger: do not verify email and password on the client side 
    // * step-4. verify email and password
    if(email === 'mohammed@takbir.com' && passward === 'tkbr'){
        window.location.href = 'bank.html'
    }
    else{
        alert('please input valid data');
    }
})