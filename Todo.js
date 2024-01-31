let todoList =['make breakfast', 'watch youtube']


showTodo()
function showTodo(){
  
  let htmlvalue =''
  for (i=0;i<todoList.length;i++){
    let todo = todoList[i]

    let html = `<p>${todo}</P>`
    htmlvalue += html
  }
  document.querySelector('.div').innerHTML = htmlvalue
}

function addTodo(){
    const inputValue = document.querySelector('.input-box')

  let todoName=  inputValue.value

  todoList.push(todoName)

  console.log(todoList)

  inputValue.value =''

  showTodo()
}