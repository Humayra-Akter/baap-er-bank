document.getElementById('login-submit').addEventListener('click', function () {
    //get user
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //condition
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html'
    }
});