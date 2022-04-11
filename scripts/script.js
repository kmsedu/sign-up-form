const inputs = document.querySelectorAll('#input-container input');
const labels = document.querySelectorAll('#input-container label');
const passwordToConfirm = document.getElementById('password-confirm');
const password = document.getElementById('password');
const passwordNotice = document.getElementById('password-notice');

inputs.forEach(input => {
    input.value = ``;
    input.addEventListener('focus', e => {
        e.target.labels[0].style.display = 'none';
    });
    input.addEventListener('focusout', e => {
        if (!e.target.value) {
            e.target.labels[0].style.display = 'block';
        };
    });
});

passwordToConfirm.addEventListener('focusout', () => {
        if (password.value && passwordToConfirm.value.length >= 8) {
        if (password.value != passwordToConfirm.value) {
            passwordNotice.textContent = "Passwords do not match";
            passwordNotice.style.visibility = 'visible';
            passwordToConfirm.setCustomValidity("Passwords do not match");
        } else {
            passwordNotice.style.visibility = 'hidden';
            passwordNotice.textContent = "Passwords must be 8-32 characters, and contain at least 1 number and 1 uppercase letter.";
            passwordToConfirm.setCustomValidity(``);
        };
    };
});

password.addEventListener('focus', () => {
    if (!password.checkValidity()) {
        passwordNotice.style.visibility = 'visible';
    }
})

password.addEventListener('input', () => {
    if (password.checkValidity()) {
        passwordNotice.style.visibility = 'hidden';
    } else {passwordNotice.style.visibility = 'visible'}
})

password.addEventListener('focusout', e => {
    if(passwordNotice.textContent != 'Passwords do not match') {
        passwordNotice.style.visibility = 'hidden';
    }; 
});