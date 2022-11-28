var email = document.forms['form']['email'];
var password = document.forms['forms']['password'];

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);
function validated(){
    if(email.value.lengt<9){
        email.style.border = "1px solid red";
        email.focus();
        return false;
    }
    if(password.value.lengt<6){
        password.style.border = "1px solid red";
        password.focus();
        return false;
    }
}
function email_verify(){
    if(email.value.length >= 8){
        email.style.border = "1px solid silver";
        return true;
    }
}
function pass_verify(){
    if(password.value.length >= 5){
        password.style.border = "1px solid silver";
        return true;
    }
}