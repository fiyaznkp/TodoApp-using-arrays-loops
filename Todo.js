let todoList =[{name:'make breakfast',dueDate:'2024-01-24'},{ name:'watch youtube',dueDate:'2024-02-02'}]


showTodo()
function showTodo(){
  
  let htmlvalue =''
  for (i=0;i<todoList.length;i++){
    let todoObject = todoList[i]


    let{name,dueDate}=todoObject

    let html = `<div> ${name}</div>
     <div>${dueDate}</div>
     <button onclick="todoList.splice(${i}, 1)
    showTodo()"
    class='delete-btn
    >Delete</button> `
    htmlvalue += html 
  }
  document.querySelector('.div').innerHTML = htmlvalue
}

function addTodo(){
    const inputValue = document.querySelector('.input-box')

    const dateValue = document.querySelector('.due-Date')

    const date= dateValue.value

  let todoName=  inputValue.value

  todoList.push({name:todoName ,dueDate:date})

  console.log(todoList)

  inputValue.value =''

  showTodo()
}