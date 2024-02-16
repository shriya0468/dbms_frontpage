function hideShow() {
    const pass = document.querySelector('#password');
    const typeAttr = pass.getAttribute('type');
    const passwordInfo = document.querySelector('#password-info')

    if (typeAttr == 'password') {
        pass.setAttribute('type', 'text');
        passwordInfo.textContent = 'Hide password';
    } else if (typeAttr == 'text') {
        pass.setAttribute('type', 'password');
        passwordInfo.textContent = 'Show password';

    }

}
function hideShowRegister() {
    const pass = document.querySelector('#password-register'); // Update the ID here
    const typeAttr = pass.getAttribute('type');
    const passwordInfo = document.querySelector('#password-info-register'); // Update the ID here

    if (typeAttr === 'password') {
        pass.setAttribute('type', 'text');
        passwordInfo.textContent = 'Hide Password';
    } else if (typeAttr === 'text') {
        pass.setAttribute('type', 'password');
        passwordInfo.textContent = 'Show Password';
    }
}



// flipping

var card = document.getElementById("card");
var title = document.getElementById("title");

function openRegister() {
    card.style.transform = "rotateY(-180deg)";
    title.innerHTML = 'Registration-Form';
}

function openLogin() {
    card.style.transform = "rotateY(0deg)";
    title.innerHTML = 'Login-Form';
}