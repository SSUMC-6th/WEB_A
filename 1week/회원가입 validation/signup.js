const inputUsername = document.querySelector('#username');
const inputEmail = document.querySelector('#email');
const inputAge = document.querySelector('#age');
const inputPassword = document.querySelector('#password');
const inputVerifyPassword = document.querySelector('#verifyPassword');

const inputUsernameError = document.querySelector('.username-error');
const emailError = document.querySelector('.email-error');
const ageError = document.querySelector('.age-error');
const passwordError = document.querySelector('.password-error');
const verifyPasswordError = document.querySelector('.verifyPassword-error');
const submitButton = document.querySelector('#submitButton');
const modal = document.querySelector('.modal-wrapper');
const finalError = document.querySelector('.final-error');
const close = document.getElementById('close');

let usernameOk = false;
let emailOk = false;
let ageOk = false;
let passwordOk = false;
let verifypasswordOk = false;

submitButton.addEventListener('click', () => {
    validateUsername();
    validateEmail();
    validateAge();
    validatePassword();
    validateVerifyPassword();

    if (usernameOk && emailOk && ageOk && passwordOk && verifypasswordOk) {
        modal.style.display = "flex";
    }
});


close.addEventListener('click', () => {
    modal.style.display = "none";
});

function validateUsername() {
    if (inputUsername.value.trim().length === 0) {
        showError(inputUsernameError, "필수 입력 항목입니다!");
        usernameOk = false;
    } else {
        showSuccess(inputUsernameError, "멋진 이름이네요!");
        usernameOk = true;
    }
}

function validateEmail() {
    if (inputEmail.value.trim().length === 0 || !inputEmail.value.includes('@')) {
        showError(emailError, "올바른 이메일 형식이 아닙니다!");
        emailOk = false;
    } else {
        showSuccess(emailError, "올바른 이메일 형식입니다!");
        emailOk = true;
    }
}

function validateAge() {
    const age = parseInt(inputAge.value);
    if (isNaN(age) || age <= 0 || age % 1 !== 0 || age < 19) {
        showError(ageError, "올바른 나이를 입력해주세요!");
        ageOk = false;
    } else {
        showSuccess(ageError, "올바른 나이 형식입니다!");
        ageOk = true;
    }
}

function validatePassword() {
    const password = inputPassword.value;
    if (password.trim().length < 4 || password.trim().length > 12 || !strongPassword(password)) {
        showError(passwordError, "비밀번호는 최소 4자리 이상, 영어/숫자/특수문자를 포함해야 합니다.");
        passwordOk = false;
    } else {
        showSuccess(passwordError, "올바른 비밀번호입니다!");
        passwordOk = true;
    }
}

function validateVerifyPassword() {
    if (inputVerifyPassword.value.trim().length === 0 || inputPassword.value !== inputVerifyPassword.value) {
        showError(verifyPasswordError, "비밀번호가 일치하지 않습니다.");
        verifypasswordOk = false;
    } else {
        showSuccess(verifyPasswordError,
            "비밀번호가 일치합니다.");
            verifypasswordOk = true;
        }
    }
    
    function validateFinalErrors() {
        finalError.innerHTML = "";
        if (!usernameOk || !emailOk || !ageOk || !passwordOk || !verifypasswordOk) {
            showError(finalError, "모든 항목을 올바르게 입력하세요.");
        }
    }
    
    function showError(input, message) {
        input.style.color = "rgba(255, 0, 0, 1)";
        input.innerHTML = message;
    }
    
    function showSuccess(input, message) {
        input.style.color = "rgba(41, 212, 91, 1)";
        input.innerHTML = message;
    }
    
    function strongPassword(str) {
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/.test(str);
    }
    