const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASS = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
    event.preventDefault(); // 이벤트가 동작안하도록 막는 역할
    loginForm.classList.add('hidden');
    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username)  // 로컬스토리지에 키, 벨류 저장
    greeting.innerText = `Hello, ${username}!`;
    greeting.classList.remove(HIDDEN_CLASS);
}


loginForm.addEventListener('submit', onLoginSubmit)  // 실행되면 이 함수 실행


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // no show
    loginForm.classList.remove('hidden');
    loginForm.addEventListener('submit', onLoginSubmit)
} else {
    // show form 4:59초
}