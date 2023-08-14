function showRegistrationForm() {

    const formContainer = document.createElement('div');
    formContainer.classList.add('registration-form-container');

    const form = document.createElement('form');
    form.classList.add('registration-form');

    const nameLabel = document.createElement('label');
    nameLabel.innerText = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Enter your name');

    const emailLabel = document.createElement('label');
    emailLabel.innerText = 'Email:';
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('placeholder', 'Enter your email');

    const passwordLabel = document.createElement('label');
    passwordLabel.innerText = 'Password:';
    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('placeholder', 'Enter your password');

    const phoneLabel = document.createElement('label');
    phoneLabel.innerText = 'Phone:';
    const phoneInput = document.createElement('input');
    phoneInput.setAttribute('type', 'tel');
    phoneInput.setAttribute('placeholder', 'Enter your phone number');

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.innerText = 'REGISTER';

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value;
        const phoneValue = phoneInput.value.trim();

        if (nameValue === '' || emailValue === '' || passwordValue === '' || phoneValue === '') {
            alert('Please fill in all the fields.');
        } else {
            window.location.href = 'buymusic.html';
        }
    });

    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(phoneLabel);
    form.appendChild(phoneInput);
    form.appendChild(submitButton);

    formContainer.appendChild(form);
    document.body.appendChild(formContainer);
}

function closeRegistrationForm() {
    document.getElementById('registrationPopup').style.display = 'none';
}
