let todoList =JSON.parse(localStorage.getItem('todoList')) || [{
  name:'make dinner',
  dueDate:'2024-01-24'
},{
  name:'workout',
  dueDate:'2024-01-22'
}]
showTodo()

function showTodo() {
  let htmlvalue = '';

  todoList.forEach(function(todoObject,index){
   
    let { name, dueDate } = todoObject;

    let html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="(function(index) { todoList.splice(index, 1); showTodo(); })(${index})" class='delete-btn'>Delete</button>
    `;

    htmlvalue += html;

  })

  

  document.querySelector('.div').innerHTML = htmlvalue;
}
document.querySelector('.add-button').addEventListener('click',()=>{
  addTodo()
})

function addTodo() {
  const inputValue = document.querySelector('.input-box');
  const dateValue = document.querySelector('.due-Date');
  const date = dateValue.value;
  let todoName = inputValue.value;

  todoList.push({ name: todoName, dueDate: date });

  inputValue.value = '';

  showTodo();
  saveToStorage()
}
function saveToStorage(){
  localStorage.setItem('todoList',JSON.stringify(todoList))
}