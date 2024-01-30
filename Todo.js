let todoList =[]

function addTodo(){
    const inputValue = document.querySelector('.input-box')

  let todoName=  inputValue.value

  todoList.push(todoName)

  console.log(todoList)
}