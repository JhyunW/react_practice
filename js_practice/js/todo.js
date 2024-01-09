const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"

let toDos = []  // 투두를 입력할때마다 이 array에 저장

function saveToDos() {
    console.log(toDos)
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event){
    const li = event.target.parentElement
    li.remove()
} 
function paintTodo (newTodo) {
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.innerText = newTodo
    const button = document.createElement("button")
    button.innerText = "삭제"
    button.addEventListener("click", deleteToDo)
    li.appendChild(span)  // li에 span이라는 차일드 넣기
    li.appendChild(button)
    toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
    event.preventDefault()  // 브라우저 이벤트 멈춤
    const newTodo = toDoInput.value
    toDoInput.value = ""
    toDos.push(newTodo)
    paintTodo(newTodo)
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

function sayHello(item) {
    console.log(`hello ${item}`)
}

const savedToDos = localStorage.getItem(TODOS_KEY)  // 로컬스토리지에 있는 TODOS_KEY 키 값에 있는 벨류 가져오기

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    parsedToDos.forEach(paintTodo)  // 돌아가는거 구조 확인해보기
}