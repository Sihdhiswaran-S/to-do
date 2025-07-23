document.addEventListener("DOMContentLoaded", function () {
  // your code here


let btn= document.getElementById("btn")
let input =document.getElementById("input")
let todolist = document.getElementById("todo-list")
let todos = []
window.onload = ()=>{
    todos=JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>addtodos(todo))

}
btn.addEventListener('click',()=>{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodos(input.value)
    input.value=''
})
function addtodos(todo){
    let para= document.createElement('p')
    para.innerHTML = `${todo} <span class="check">&#10003;</span><span class="cancel">&#10006;</span>`;
    para.className = "todo-item"
    todolist.appendChild(para)
    
    para.style.backgroundColor = "#ffefef";
    para.style.fontWeight = "bold";

    para.addEventListener('click',()=>{
    para.classList.toggle('completed')
    remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        todolist.removeChild(para)
        remove(todo)
    })
    para.querySelector('.check').addEventListener('click', () => {
    para.classList.toggle('completed');
  });

  para.querySelector('.cancel').addEventListener('click', () => {
    todolist.removeChild(para);
    remove(todo);
  });
    
}
function remove(todo) {
    let index  = todos.indexOf(todo)
    if (index>-1) {
        todos.splice(index,1)
    }
    localStorage.setItem('todos',JSON.stringify(todos))
    
}
});