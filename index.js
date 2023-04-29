let fname = document.getElementById("fname")
let email = document.getElementById("email")
let pass = document.getElementById("pass")
let confirm_pass = document.getElementById("confrim-pass")
let message = document.getElementById("message")
let message1 = document.getElementById("message1")
let btn11 = document.getElementById("btn")
let forms = document.getElementsByClassName("form")
// let success_message=document.getElementById("success-message")

const arr = [];
function success() {
    console.log("hi")
    if (!(fname.value && email.value && pass.value && confirm_pass.value)) {
        // error_message.innerText="Error ; All the fields are mendatory"
        // success_message.style.color="red";
        message.innerText = "Error : All the fields are mendatory";
        message.style.display = "block";
        message.style.color = "red";
        message1.style.display = "none";
    }
    else {
        message1.innerText = "successfully signed Up!";
        message1.style.display = "block";
        message1.style.color = "green";
        message.style.display = "none";
    }

    var user = {
        name: fname.value,
        email: email.value,
        pass: pass.value,
    };
    localStorage.setItem("user", JSON.stringify(user));
    setTimeout(() => {
        window.location.href = "./profile.html";
    }, 1000);

}

document.getElementById("logout-btn").addEventListener("click", () => {
      //   localStorage.removeItem("email");
      //   localStorage.removeItem("pass");
      localStorage.removeItem("user");
      location.reload();
      window.location.href = "./index.html";
    });


let fname1 = document.getElementById("full-name")
let email1 = document.getElementById("emails")
let pass1 = document.getElementById("password")
let but12 = document.getElementById("btn1")

function input() {
fname1.innerHTML=`Full Name : ${fname1}`;
email1.innerHTML=`Email : ${fname1}`;
pass1.innerHTML=`Password : ${fname1}`;
}
input()














// btn11.addEventListener("click", success);
// function success() {
//     if (!(fname.value && email.value && pass.value && confirm_pass.value)) {
//         message.innerText = "Error : All the fields are mendatory";
//         message.style.display = "block";
//         message.style.color = "red";
//         message1.style.display = "none";
//         return;
//     }
//     else{
//         message1.innerText = "successfully signed Up!";
//         message1.style.display = "block";
//         message1.style.color = "green";
//         message.style.display = "none";
//     }
//     console.log("hi");
//   showData();
// }
// function showData(){
//     // console.log("hi1");
//     // setTimeout(() => {
//     //     console.log("hi2");
//     //      document.getElementsByName("form").style.display="none";
//     //     // fname.style.display="none";
//     //     // email.style.display="none";
//     //     // pass.style.display="none";
//     //     // confirm_pass.style.display="none";
//     //     // btn11.style.display="none";
//     //     // message.style.display="none";
//     //     // message1.style.display="none";
//     //     // document.forms.style.display="none";
//     // }, 2000);
// }

// localStorage.setItem("Details : ",);
// localStorage.setItem("email : ",email );
// localStorage.setItem("password : ", pass);

