function showBuy() {
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

    const locatelable = document.createElement('label');
    locatelable.innerText = 'Location:';
    const locate = document.createElement('input');
    locate.setAttribute('type', 'text');
    locate.setAttribute('placeholder', 'Enter your location');

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'button');
    submitButton.innerText = 'BUY';
    submitButton.addEventListener('click', function () {
        showThankYouPopup();
    });


    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(phoneLabel);
    form.appendChild(phoneInput);
    form.appendChild(locatelable);
    form.appendChild(locate);
    form.appendChild(submitButton);


    formContainer.appendChild(form);

    document.body.appendChild(formContainer);
}

function showThankYouPopup() {
    const thankYouButton = document.createElement('button');
    thankYouButton.classList.add('thank-you-button');
    thankYouButton.innerText = '"Thank you for your purchase!"';

    thankYouButton.addEventListener('click', function () {
        window.location.reload();
    });

    document.body.appendChild(thankYouButton);
    const formContainer = document.querySelector('.registration-form-container');
    document.body.removeChild(formContainer);
}