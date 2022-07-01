//users

var users=[
  {
    username: 'admin',
    password: 'admin' ,
  },
  {
    username: 'admin2',
    password: 'admin2' ,
  }
]
// //register

// const regform = document.getElementById('form')
// const regbtn = document.getElementById('register')


// regbtn.addEventListener("click",(e)=>{
//   console.log('in fuction regbtn')
// e.preventDefault();
// const newusername = regform.yourUsername.value
// const newpassword = regform.yourPassword.value;
// var newUser = {
//   username:newusername,
//   password:newpassword 
// }

// for(i=0;i<users.length;i++){
//   if ( newusername == users[i].username){
//     alert ("The username is already in use");
//     return

// }
// }
// users.push(newUser)
// console.log(users)
// window.location = "pages-login.html";
// })

//login
const loginform = document.getElementById('form')
const loginbtn = document.getElementById('login')

console.log(users)


loginbtn.addEventListener("click",(e)=>{
  e.preventDefault();
const username = loginform.yourUsername.value
const password = loginform.yourPassword.value;



for(i=0;i<users.length;i++){
  if ( username == users[i].username && password == users[i].password){
    alert ("Login successfully");
    window.location = "index.html";
    return
}
}
alert('Try again');
})

