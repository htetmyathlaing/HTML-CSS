let inputElement = document.getElementById('todo_input');
let toDoListContainer = document.getElementById('to_do_list');

const LOCAL_STORAGE_KEY = 'to-do-items';
let toDoList = [];

getToDoItemsFromLocalStorage();
initUI();

inputElement.addEventListener('keypress', (e) => {
    if(e.key ==  'Enter' && e.target.value){
        let toDoItem = addToToDoList(e.target.value)
        storeToDoItemsToLocalStorage(toDoItem)
        insertToDoItemToDom(toDoItem)
        e.target.value = ''
    }
})

function getToDoItemsFromLocalStorage(){
    let data = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(data != null){
        toDoList = JSON.parse(data)
    }
}

function addToToDoList(toDoName){
    let toDoItem = {
        id :  new Date().getTime(),
        name: toDoName
    }
    toDoList.push(toDoItem)
    return toDoItem;
}

function storeToDoItemsToLocalStorage(){
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDoList))
}

function initUI(){
    toDoList.forEach(todo => {
        insertToDoItemToDom(todo)
    })
}

function insertToDoItemToDom(todo){
    let todoItem = document.createElement('div')
    let formCheck = document.createElement('div')
    let checkBox = document.createElement('input')
    let label =  document.createElement('label')
    let removeBtn = document.createElement('button')
    let id =  todo.id
    
    checkBox.type = 'checkbox'
    checkBox.className = 'form-check-input'
    checkBox.id = 'to_do_'+id
    checkBox.addEventListener('change', toDoItemStatusChangeHandler)

    label.className = 'form-check-label'
    label.htmlFor = 'to_do_'+id
    label.textContent = todo.name

    formCheck.className = 'form-check'
    formCheck.appendChild(checkBox)
    formCheck.appendChild(label)

    removeBtn.type = 'button'
    removeBtn.className = 'btn-close'
    removeBtn.setAttribute('data-id', id)
    removeBtn.addEventListener('click', removeButtonHandler)

    todoItem.className ='todo_item w-100 my-2 d-flex justify-content-between'
    todoItem.id = id
    todoItem.appendChild(formCheck)
    todoItem.appendChild(removeBtn)
   
    // toDoListContainer.appendChild(todoItem)
    toDoListContainer.prepend(todoItem)
}

function toDoItemStatusChangeHandler(e){
    // e.target.nextElementSibling.classList.add('done')
    // e.target.nextElementSibling.classList.remove('done')
    e.target.nextElementSibling.classList.toggle('done')
    e.target.nextElementSibling.classList.toggle('text-danger')
}

function removeButtonHandler(e){
    //    e.target.parentElement.remove()
    let toDelete = confirm('Are you sure to remove?')
    if(toDelete){
        document.getElementById(e.target.getAttribute('data-id')).remove()
    }
}