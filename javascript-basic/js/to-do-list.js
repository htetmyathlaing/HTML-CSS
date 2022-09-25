let inputElement = document.getElementById('todo_input');
let toDoListContainer = document.getElementById('to_do_list');

/**
 * 1. keydown
 * 2. keyup
 * 3. keypress
 */

inputElement.addEventListener('keypress', (e) => {
    // e.keyCode == 13
    if(e.key ==  'Enter' && e.target.value){
        createToDoItem(e.target.value)
        // createToDoItemV2(e.target.value)
        // createToDoItemV3(e.target.value)
        e.target.value = ''
    }
})


function createToDoItem(todo){
    let todoItem = document.createElement('div')
    let formCheck = document.createElement('div')
    let checkBox = document.createElement('input')
    let label =  document.createElement('label')
    let removeBtn = document.createElement('button')
    let id =  new Date().getTime()
    
    checkBox.type = 'checkbox'
    checkBox.className = 'form-check-input'
    checkBox.id = 'to_do_'+id
    checkBox.addEventListener('change', toDoItemStatusChangeHandler)

    label.className = 'form-check-label'
    label.htmlFor = 'to_do_'+id
    label.textContent = todo

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

function createToDoItemV2(todo){
    let todoItem = document.createElement('div')
    todoItem.className ='form-check w-100 todo_item'

    todoItem.innerHTML = `
    <input class="form-check-input" type="checkbox"  id="todo_1">
    <label class="form-check-label" for="todo_1">
        ${todo}
    </label>
    `
    toDoListContainer.prepend(todoItem)
}

/**
 * Should not use this approach
 * Performance issue
 */
function createToDoItemV3(todo){
    toDoListContainer.innerHTML += `
    <div class="form-check w-100 todo_item">
        <input class="form-check-input" type="checkbox" id="todo_1">
        <label class="form-check-label" for="todo_1">
            ${todo}
        </label>
    </div>
    `
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