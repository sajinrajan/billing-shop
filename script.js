let register =document.getElementById('form-customer');
let form =document.getElementById('form-customer');
let log =document.getElementById('login-form');
let reg =document.getElementById('form-customer');



function Register(){
    register.style.display = 'block'
    // alert('hi')
}
function closeMenu(){
    form.style.display = 'none'
}
function closeMenuLogin(){
    log.style.display = "none"
}
function login(){
    register.style.display = 'none'
    log.style.display = 'block'
}
function signup(){
    log.style.display = 'none'
    register.style.display = 'block'
}

const username  =document.getElementById('reg-username')
const usePassword =document.getElementById('reg-password')
const showLogin =document.getElementById('show-login')
const logUsername =document.getElementById('login-username')
const loginPassword =document.getElementById('login-password')
const showRegister =document.getElementById('show-register')

username.addEventListener('submit',(event)=>{
    event.preventDefault();
})
const enteredpassword ! = reg-password.value;

