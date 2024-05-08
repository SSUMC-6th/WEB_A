// JavaScript source code
const form = document.getElementById('form');


const button = document.getElementById('button');
let pop = document.getElementById('pop');

form.addEventListener('change', buttonable);
form.addEventListener('submit', openpop);
pop.addEventListener('click', closepop);

function buttonable() {
    let isValid = validate();
    if (isValid === false) {
        button.disabled = true;
    }
    else {
        button.disabled = false;
    }
}

function validate() {

    let nametrue = false;
    const username = document.getElementById('username').value;
    let nameerror = document.getElementById('nameerror');
    if (username === '') {
        nametrue = false;
        nameerror.innerHTML = '필수 입력 항목입니다';
        nameerror.style.color = 'red';
    } else {
        nametrue = true;
        nameerror.innerHTML = '확인되었습니다';
        nameerror.style.color = 'green';
    }

    let emailtrue = false;
    const useremail = document.getElementById('useremail').value;
    let emailerror = document.getElementById('emailerror');
    if (useremail === '') {
        emailtrue = false;
        emailerror.innerHTML = '필수 입력 항목입니다';
        emailerror.style.color = 'red';
    } else if (useremail.indexOf('@') === -1) {
        emailtrue = false;
        emailerror.innerHTML = '이메일 형식으로 입력해주세요';
        emailerror.style.color = 'red';
    } else {
        emailtrue = true;
        emailerror.innerHTML = '올바른 이메일 형식입니다!'
        emailerror.style.color = 'green';
    }

    let agetrue = false;
    const userage = document.getElementById('userage').value;
    let ageerror = document.getElementById('ageerror');
    if (userage === '') {
        agetrue = false;
        ageerror.innerHTML = '나이를 입력해주세요';
        ageerror.style.color = 'red';
    } else if (isNaN(userage)) {
        agetrue = false;
        ageerror.innerHTML = '나이는 숫자 형식이어야 합니다';
        ageerror.style.color = 'red';
    } else if (userage < 0) {
        agetrue = false;
        ageerror.innerHTML = '나이는 음수를 입력할 수 없습니다';
        ageerror.style.color = 'red';
    } else if (!Number.isInteger(parseFloat(userage))) {
        agetrue = false;
        ageerror.innerHTML = '나이는 소수를 입력할 수 없습니다';
        ageerror.style.color = 'red';
    } else if (parseInt(userage, 10) < 19) {
        agetrue = false;
        ageerror.innerHTML = '미성년자는 가입할 수 없습니다';
        ageerror.style.color = 'red';
    } else {
        agetrue = true;
        ageerror.innerHTML = '올바른 나이 형식입니다!'
        ageerror.style.color = 'green';
    }

    let pwdtrue = false;
    const password = document.getElementById('password').value;
    let pwderror = document.getElementById('pwderror');
    if (password.length < 4) {
        pwdtrue = false;
        pwderror.innerHTML = '비밀번호는 최소 4자리 이상이어야 합니다';
        pwderror.style.color = 'red';
    } else if (password.length > 12) {
        pwdtrue = false;
        pwderror.innerHTML = '비밀번호는 최대 12자리까지 가능합니다';
        pwderror.style.color = 'red';
    } else if (!/(?=.*[!@#$%^&*])(?=.*[a-zA-Z])(?=.*[0-9]).{4,12}/.test(password)) {
        pwdtrue = false;
        pwderror.innerHTML = '영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다';
        pwderror.style.color = 'red';
    } else {
        pwdtrue = true;
        pwderror.innerHTML = '올바른 비밀번호입니다!'
        pwderror.style.color = 'green';
    }

    let awdchktrue = false;
    const pwdcheck = document.getElementById('pwdcheck').value;
    let pwdchkerror = document.getElementById('pwdchkerror');
    if (pwdcheck === '') {
        pwdchktrue = false;
        pwdchkerror.innerHTML = '';
    } else if (pwdcheck !== password) {
       pwdchktrue = false;
        pwdchkerror.innerHTML = '비밀번호가 일치하지 않습니다';
        pwdchkerror.style.color = 'red';
    } else {
        pwdchktrue = true;
        pwdchkerror.innerHTML = '비밀번호와 일치합니다';
        pwdchkerror.style.color = 'green';
    }

    let alltrue = nametrue === true && emailtrue === true && agetrue === true && pwdtrue === true && pwdchktrue === true
    return alltrue;
}

function openpop(event) {
    event.preventDefault();
    if (validate() === true) {
        pop.style.display = 'block';
    }
}

function closepop() {
    pop.style.display = 'none';
}