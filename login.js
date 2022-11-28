var email = document.forms['form']['email'];
var password = document.forms['forms']['passwords'];

email.addEventListener('textInput', email_Verify);
passwords.addEventListener('textInput', pass_Verify);
function validated(){
    if(email.value.lengt<9){
        email.style.border = "1px solid red";
        email.focus();
        return false;
    }
    if(passwords.value.lengt<6){
        passwords.style.border = "1px solid red";
        passwords.focus();
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
    if(passwords.value.length >= 5){
        passwords.style.border = "1px solid silver";
        return true;
    }
}