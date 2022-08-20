document.getElementById('login-btn').addEventListener('click', function(){
    function getInput(inputId){
        const inputField = document.getElementById(inputId);
        const input = inputField.value;
        inputField.value = '';
        return input;
    }

    const email = getInput('email-field');
    const password = getInput('password-field')

    if(email === '' || password === ''){
        alert('Enter Password & Email');
        return;
    }

    if(email === 'mohammed@takbir' && password === 'tkbr'){
        window.location.href = 'custom-bank.html';
    }
    else{
        alert('Enter valid info')
    }
})