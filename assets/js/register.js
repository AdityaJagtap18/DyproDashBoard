
const regform = document.getElementById('form')
const regbtn = document.getElementById('register')
let index = 0;
let uservalid = false;
var passwordarray = ['admin','aditya','a'];
var usernamearray = ['admin','aditya','a'];

regbtn.addEventListener("click",(e)=>{
  e.preventDefault();
const username = regform.yourUsername.value
const password = regform.yourPassword.value;
while (uservalid == false){
if ( username == usernamearray[index] && password == passwordarray[index]){
    index ++;
 }
else{
    alert ("Register successfully");
    uservalid = true
    passwordarray.push(yourPassword.value)
    usernamearray.push(yourUsername.value)
    console.log(passwordarray,usernamearray)
    window.location = "pages-login.html";
    uservalid = true
}}
 // alert('Try again');

}
)
console.log(usernamearray)