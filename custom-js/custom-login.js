document.getElementById('login-btn').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    if(email === 'mohammed@takbir.com' && password === 'tkbr'){
        window.location.href = 'custom-bank.html'
    }
    else{
        alert('please enter valid info')
    }
})