let inputUsername = document.querySelector('#username'); // input#username
let inputEmail = document.querySelector('#email');
let inputAge = document.querySelector('#age');
let inputPassword = document.querySelector('#password');
let inputVerifyPassword = document.querySelector('#verifyPassword');

let inputUsernameError = document.querySelector('.username-error');
let emailError = document.querySelector('.email-error');
let ageError = document.querySelector('.age-error');
let passwordError = document.querySelector('.password-error');
let verifyPasswordError = document.querySelector('.verifyPassword-error');
let submitButton = document.querySelector('#submitButton');

const close = document.getElementById('close');
const modal = document.querySelector('.modal-wrapper');

function idLength(value) {
    return value.length == 0
}

function emailValidation(value) {
    return !(value.includes('@'))
}

function onlyNumber(str) {
    return /[0-9]/.test(str);
}

function strongPassword (str) {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/.test(str);
}

let usernameOk = false;
let emailOk = false;
let ageOk = false;
let passwordOk = false;
let verifypasswordOk = false;


submitButton.onclick = () => {
    // 유저 이름
    if(idLength(inputUsername.value)){
        inputUsernameError.style.color = "rgba(255, 0, 0, 1)";
        inputUsernameError.innerHTML ="필수 입력 항목입니다!";
        usernameOk = false;
    }
    else{
        inputUsernameError.style.color = "rgba(41, 212, 91, 1)";
        inputUsernameError.innerHTML ="멋진 이름이네요!";
        usernameOk = true;
    }
    // 이메일
    if(idLength(inputEmail.value) || emailValidation(inputEmail.value)){
        emailError.style.color = "rgba(255, 0, 0, 1)";
        emailError.innerHTML = "올바른 이메일 형식이 아닙니다!";
        emailOk = false;
    }
    else{
        emailError.style.color = "rgba(41, 212, 91, 1)";
        emailError.innerHTML ="올바른 이메일 형식입니다!";
        emailOk = true;
    }
    // 나이
    if(idLength(inputAge.value)){
        ageError.style.color = "rgba(255, 0, 0, 1)";
        ageError.innerHTML ="나이를 입력해주세요!";
        ageOk = false;
    }
    else if(!onlyNumber(inputAge.value)){
        ageError.style.color = "rgba(255, 0, 0, 1)";
        ageError.innerHTML ="나이는 숫자 형식이어야 합니다!";
        ageOk = false;
    }
    else if(inputAge.value <= 0){
        ageError.style.color = "rgba(255, 0, 0, 1)";
        ageError.innerHTML ="나이는 음수가 될 수 없습니다!";
        ageOk = false;
    }
    else if(inputAge.value.includes(".")){
        ageError.style.color = "rgba(255, 0, 0, 1)";
        ageError.innerHTML ="나이는 소수가 될 수 없습니다!";
        ageOk = false;
    }
    else if(inputAge.value < 19){
        ageError.style.color = "rgba(255, 0, 0, 1)";
        ageError.innerHTML ="미성년자는 가입할 수 없습니다!";
        ageOk = false;
    }
    else{
        ageError.style.color = "rgba(41, 212, 91, 1)";
        ageError.innerHTML ="올바른 나이 형식입니다!";
        ageOk = true;
    }
    // 비밀번호
    if(idLength(inputPassword.value) || inputPassword.value.length < 4){
        passwordError.style.color = "rgba(255, 0, 0, 1)";
        passwordError.innerHTML ="비밀번호는 최소 4자리 이상이어야 합니다.";
        passwordOk = false;
    }
    else if(inputPassword.value.length > 12){
        passwordError.style.color = "rgba(255, 0, 0, 1)";
        passwordError.innerHTML ="비밀번호는 최대 12자리까지 가능합니다.";
        passwordOk = false;
    }
    else if(!strongPassword(inputPassword.value)){
        passwordError.style.color = "rgba(255, 0, 0, 1)";
        passwordError.innerHTML ="영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.";
        passwordOk = false;
    }
    else{
        passwordError.style.color = "rgba(41, 212, 91, 1)";
        passwordError.innerHTML ="올바른 비밀번호입니다!";
        passwordOk = true;
    }
    // 비밀번호 확인
    if(idLength(inputVerifyPassword.value)){
        verifyPasswordError.style.color = "rgba(255, 0, 0, 1)";
        verifyPasswordError.innerHTML ="비밀번호가 일치하지 않습니다.";
        verifypasswordOk = false;
    }
    else if(inputPassword.value != inputVerifyPassword.value){
        verifyPasswordError.style.color = "rgba(255, 0, 0, 1)";
        verifyPasswordError.innerHTML ="비밀번호가 일치하지 않습니다.";
        verifypasswordOk = false;
    }
    else{
        verifyPasswordError.style.color = "rgba(41, 212, 91, 1)";
        verifyPasswordError.innerHTML ="비밀번호가 일치합니다.";
        verifypasswordOk = true;
    }
    if(usernameOk && emailOk && ageOk && passwordOk && verifypasswordOk){
        modal.style.display = "flex";
    }
};

close.onclick = () => {
    modal.style.display = "none";
};