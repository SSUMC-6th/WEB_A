function check(){
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const age = document.querySelector("#age").value;
    const password = document.querySelector("#password").value;
    const pwConfirm = document.querySelector("#pwConfirm").value;
    const button = document.querySelector("#submitButton").value;
    const successMessage = document.querySelectorAll(".success");
    const failureMessage = document.querySelectorAll(".fail");

    const numMessage = document.getElementsByClassName('num');
    const minusMessage = document.getElementsByClassName('minus');
    const integerMessage = document.getElementsByClassName('integer');
    const adultMessage = document.getElementsByClassName('adult');
    
    const maxMessage = document.getElementsByClassName('max');
    const pwPatternMessage = document.getElementsByClassName('pwPattern');

    const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    const numPattern = /^[0-9]*$/;
    const pwPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{4,12}$/

    //이름
    if(username == ""){
        failureMessage[0].classList.remove("hide");
        successMessage[0].classList.add("hide");
    }
    else{
        failureMessage[0].classList.add("hide");
        successMessage[0].classList.remove("hide");
    }

    //이메일
    if(email == ""){
        successMessage[1].classList.add("hide");
        failureMessage[1].classList.remove("hide");
    }
    else{
        if(emailPattern.test(email) === true){
            failureMessage[1].classList.add("hide");
            successMessage[1].classList.remove("hide");
        }
        else{
            successMessage[1].classList.add("hide");
            failureMessage[1].classList.remove("hide");
        }
    }

    //나이
    if(age == ""){
        successMessage[2].classList.add("hide");
        failureMessage[2].classList.remove("hide");
    }
    else{
        if(numPattern.test(age) === true){
            if(age < 0){
                minusMessage[0].classList.remove("hide");
                numMessage[0].classList.add("hide");
                successMessage[2].classList.add("hide");
                failureMessage[2].classList.add("hide");
                adultMessage[0].classList.add("hide");
            }
            // if(소수){

            // }
            if(age < 20){
                adultMessage[0].classList.remove("hide");
                numMessage[0].classList.add("hide");
                successMessage[2].classList.add("hide");
                failureMessage[2].classList.add("hide");
            }
            else{
                numMessage[0].classList.add("hide");
                failureMessage[2].classList.add("hide");
                successMessage[2].classList.remove("hide");
                minusMessage[0].classList.add("hide");
                adultMessage[0].classList.add("hide");
            }
        }
        else{
            numMessage[0].classList.remove("hide");
            successMessage[2].classList.add("hide");
            failureMessage[2].classList.add("hide");
            minusMessage[0].classList.add("hide");
            adultMessage[0].classList.add("hide");
        }
    }

    //비밀번호
    if(password == "" || password.length < 4){
        successMessage[3].classList.add("hide");
        failureMessage[3].classList.remove("hide");
        maxMessage[0].classList.add("hide");
        pwPatternMessage[0].classList.add("hide");
    }
    else{        
        //정규식 적용 안됨
        if(pwPattern.test(password)==false){
            successMessage[3].classList.add("hide");
            failureMessage[3].classList.add("hide");
            maxMessage[0].classList.add("hide");
            pwPatternMessage[0].classList.remove("hide");
        }

        if(password.length > 12){
            successMessage[3].classList.add("hide");
            failureMessage[3].classList.add("hide");
            maxMessage[0].classList.remove("hide");
            pwPatternMessage[0].classList.add("hide");
        }

        else{
            successMessage[3].classList.remove("hide");
            failureMessage[3].classList.add("hide");
            maxMessage[0].classList.add("hide");
            pwPatternMessage[0].classList.add("hide");
        }
    }

    //비밀번호 확인
    if(pwConfirm == ""){
        successMessage[4].classList.add("hide");
        failureMessage[4].classList.remove("hide");
    }
    else{
        if(pwConfirm===password){
            failureMessage[4].classList.add("hide");
            successMessage[4].classList.remove("hide");
        }
        else{
            successMessage[4].classList.add("hide");
            failureMessage[4].classList.remove("hide");
        }
    }
}