

// showTodo()
// function showTodo(){
  
//   let htmlvalue =''
//   for (let i=0;i<todoList.length;i++){
//     let todoObject = todoList[i]


//     let{name,dueDate}=todoObject

//     let html = `<div> ${name}</div>
//      <div>${dueDate}</div>
//      <button onclick="todoList.splice(${i}, 1)
//     showTodo()"
//     class='delete-btn
//     >Delete</button> `
//     htmlvalue += html 
//   }
//   document.querySelector('.div').innerHTML = htmlvalue
// }

// function addTodo(){
//     const inputValue = document.querySelector('.input-box')

//     const dateValue = document.querySelector('.due-Date')

//     const date= dateValue.value

//   let todoName=  inputValue.value

//   todoList.push({name:todoName ,dueDate:date})

//   console.log(todoList)

//   inputValue.value =''

//   showTodo()
// }

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

  for (let i = 0; i < todoList.length; i++) {
    let todoObject = todoList[i];
    let { name, dueDate } = todoObject;

    let html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="(function(index) { todoList.splice(index, 1); showTodo(); })(${i})" class='delete-btn'>Delete</button>
    `;

    htmlvalue += html;
  }

  document.querySelector('.div').innerHTML = htmlvalue;
}

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