let fname=document.getElementById("fname")
let email=document.getElementById("email")
let pass=document.getElementById("pass")
let confirm_pass=document.getElementById("confrim-pass")
let message=document.getElementById("message")
let message1=document.getElementById("message1")
let btn11=document.getElementById("btn")
// let success_message=document.getElementById("success-message")

// function login(){
//     console.log("hi")
//     if(fname.value==""|| email.value=="" || pass.value=="" || confirm_pass.value==""){
//     error_message.innerText="Error ; All the fields are mendatory"
//     success_message.style.color="red";
//     alert("error")
//     }
//     else{
//         success_message.innerText="successfully signed Up!"
//         success_message.style.color="green";
//         alert("success")
//     }
// }
// btn11.addEventListener("click", success);
function success() {
    if (!(fname.value && email.value && pass.value && confirm_pass.value)) {
        message.innerText = "Error : All the fields are mendatory";
        message.style.display = "block";
        message.style.color = "red";
        message1.style.display = "none";
        return;
    }
    else{
        message1.innerText = "successfully signed Up!";
        message1.style.display = "block";
        message1.style.color = "green";
        message.style.display = "none";
    }
  
}