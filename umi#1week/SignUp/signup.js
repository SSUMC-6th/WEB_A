const modal = document.querySelector(".modal-container");
const closeBtn = document.querySelector("#closeButton");

const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const numPattern = /^-?\d*(\.\d*)?$/;
const pwPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{4,12}$/

let usernameCheck = false;
let emailCheck = false;
let ageCheck = false;
let passwordCheck = false;
let pwConfirmCheck = false;

function check(){
    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let age = document.querySelector("#age").value;
    let password = document.querySelector("#password").value;
    let pwConfirm = document.querySelector("#pwConfirm").value;
    let successMessage = document.querySelectorAll(".success");
    let failureMessage = document.querySelectorAll(".fail");
    
    //이름
    //빈칸
    if(username == ""){
        failureMessage[0].classList.remove("hide");
        successMessage[0].classList.add("hide");
        usernameCheck = false;
    }
    else{
        failureMessage[0].classList.add("hide");
        successMessage[0].classList.remove("hide");
        usernameCheck = true;
    }

    //이메일
    //빈칸
    if(email == ""){
        successMessage[1].classList.add("hide");
        failureMessage[1].classList.remove("hide");
        emailCheck = false;
    }
    else{
        //이메일 형식
        if(emailPattern.test(email) === true){
            successMessage[1].classList.remove("hide");
            failureMessage[1].classList.add("hide");
            emailCheck = true;
        }
        else{
            successMessage[1].classList.add("hide");
            failureMessage[1].classList.remove("hide");
            emailCheck = false;
        }
    }

    //나이
    if(age == ""){
        successMessage[2].classList.add("hide");
        failureMessage[2].classList.remove("hide");
        ageCheck = false;
    }
    else{
        if(numPattern.test(age) === true){
            //음수
            if(age <= 0){
                successMessage[2].classList.add("hide");
                failureMessage[2].innerHTML = "나이는 음수가 될 수 없습니다!";
                failureMessage[2].classList.remove("hide");
                ageCheck = false;
            }
            //소수
            if(age % 1 !== 0){
                successMessage[2].classList.add("hide");
                failureMessage[2].innerHTML = "나이는 소수가 될 수 없습니다!";
                failureMessage[2].classList.remove("hide");
                ageCheck = false;
            }
            //미성년자
            if(age < 20){
                successMessage[2].classList.add("hide");
                failureMessage[2].innerHTML = "미성년자는 가입할 수 없습니다!";
                failureMessage[2].classList.remove("hide");
                ageCheck = false;
            }
            else{
                failureMessage[2].classList.add("hide");
                successMessage[2].classList.remove("hide");
                ageCheck = true;
            }
        }
        else{
            successMessage[2].classList.add("hide");
            failureMessage[2].innerHTML = "나이는 숫자 형식이어야 합니다!";
            failureMessage[2].classList.remove("hide");
            ageCheck = false;
        }
    }

    //비밀번호
    //4자 이상
    if(password == "" || password.length <= 4){
        successMessage[3].classList.add("hide");
        failureMessage[3].classList.remove("hide");
        passwordCheck = false;
    }
    else{        
        //비밀번호 형식
        if(pwPattern.test(password)==false){
            successMessage[3].classList.add("hide");
            failureMessage[3].innerHTML = "비밀번호는 영어, 숫자, 특수문자를 모두 조합해야 합니다.";
            failureMessage[3].classList.add("hide");
            passwordCheck = false;
        }
        //12자 이하
        if(password.length >= 12){
            successMessage[3].classList.add("hide");
            failureMessage[3].innerHTML = "비밀번호는 최대 12자리까지 가능합니다.";
            failureMessage[3].classList.remove("hide");
            passwordCheck = false;
        }
        else{
            successMessage[3].classList.remove("hide");
            failureMessage[3].classList.add("hide");
            passwordCheck = true;
        }
    }

    //비밀번호 확인
    //빈칸
    if(pwConfirm == ""){
        successMessage[4].classList.add("hide");
        failureMessage[4].classList.remove("hide");
        pwConfirmCheck = false;
    }
    else{
        //비밀번호 일치 확인
        if(pwConfirm === password){
            failureMessage[4].classList.add("hide");
            successMessage[4].classList.remove("hide");
            pwConfirmCheck = true;
        }
        else{
            successMessage[4].classList.add("hide");
            failureMessage[4].classList.remove("hide");
            pwConfirmCheck = false;
        }
    }

    if(usernameCheck && emailCheck && ageCheck && passwordCheck && pwConfirmCheck){
        modal.style.display = "block";
    }
};

//모달창 닫기
closeBtn.onclick = () => {
    modal.style.display = "none";
};