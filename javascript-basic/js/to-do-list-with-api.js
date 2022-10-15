let inputElement = document.getElementById('todo_input');
let toDoListContainer = document.getElementById('to_do_list');
let btnClearAll = document.getElementById('btn-clear-all')
let toDoFilters = document.getElementsByClassName('filter')
let toDoFilterAll = document.getElementById('to-do-filter-all')
let toDoFilterFinished = document.getElementById('to-do-filter-finished')
let toDoFilterUnfinished = document.getElementById('to-do-filter-unfinished')

const LOCAL_STORAGE_KEY = 'to-do-items';
const TO_DO_FILTER = 'to-do-list-filter';
const TO_DO_FILTER_ALL = 'all';
const TO_DO_FILTER_FINISHED = 'finished';
const TO_DO_FILTER_UNFINISHED = 'unfinished';
const AUTHOR_NAME = 'hmh';
const API_BASE_URL = 'http://localhost:8000/todos';

let toDoList = [];
let toDoFilter = TO_DO_FILTER_ALL;

getFilterStatusFromLocalStorage();
setCurrentActiveFilter();
init();

async function init(){
    await fetchToDoItems();
    renderUIWithFilter();
}


inputElement.addEventListener('keypress', async (e) => {
    if (e.key == 'Enter' && e.target.value) {
        let toDoItem = await addToToDoList(e.target.value)
        if (toDoFilter != TO_DO_FILTER_FINISHED) {
            insertToDoItemToDom(toDoItem)
        }
        e.target.value = ''
    }
})

btnClearAll.addEventListener('click', () => {
    alert('Json Server not support clearing all item!')
    // let removeAll = confirm('Are you sure to remove all items?')
    // if (removeAll) {
    //     toDoList = [];
    //     // storeToDoItemsToLocalStorage()
    //     localStorage.removeItem(LOCAL_STORAGE_KEY)
    //     removeAllToDoElementsFromDOM()
    // }
})

async function fetchToDoItems() {
    // fetch(API_BASE_URL)
    // .then(response => response.json())
    // .then(data => {
    //     toDoList = data
    //     renderUIWithFilter();
    // })
    let response =  await fetch(`${API_BASE_URL}?author=${AUTHOR_NAME}`)
    toDoList = await response.json()
}

async function storeToDoItem(data) {
    let response =  await fetch(API_BASE_URL, {
        method : "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
        },
        body: JSON.stringify(data)
    })
    return response.json()
}

async function updateToDoItem(id, data) {
    data.done = !data.done
    let response =  await fetch(`${API_BASE_URL}/${id}`, {
        method : "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    return response.json()
}

async function deleteToDoItem(id) {
    let response =  await fetch(`${API_BASE_URL}/${id}`, {
        method : "DELETE",
    })
    if(response.status == 200){
        return true;
    }
    return false;
}

async function addToToDoList(toDoName) {
    let toDoItem =  await storeToDoItem({
        name: toDoName,
        done: false,
        author: AUTHOR_NAME
    })
    toDoList.push(toDoItem)
    return toDoItem;
}

function initUI(todoItems) {
    removeAllToDoElementsFromDOM()
    todoItems.forEach(todo => {
        insertToDoItemToDom(todo)
    })
}

function insertToDoItemToDom(todo) {
    let todoItem = document.createElement('div')
    let formCheck = document.createElement('div')
    let checkBox = document.createElement('input')
    let label = document.createElement('label')
    let removeBtn = document.createElement('button')
    let id = todo.id

    checkBox.type = 'checkbox'
    checkBox.className = 'form-check-input'
    checkBox.id = 'to_do_' + id
    checkBox.checked = todo.done
    checkBox.setAttribute('data-id', id)
    checkBox.addEventListener('change', toDoItemStatusChangeHandler)

    label.className = `form-check-label ${todo.done ? 'done text-danger' : ''}`
    label.htmlFor = 'to_do_' + id
    label.textContent = todo.name

    formCheck.className = 'form-check'
    formCheck.appendChild(checkBox)
    formCheck.appendChild(label)

    removeBtn.type = 'button'
    removeBtn.className = 'btn-close'
    removeBtn.setAttribute('data-id', id)
    removeBtn.addEventListener('click', removeButtonHandler)

    todoItem.className = 'todo_item w-100 my-2 d-flex justify-content-between'
    todoItem.id = id
    todoItem.appendChild(formCheck)
    todoItem.appendChild(removeBtn)

    toDoListContainer.prepend(todoItem)
}

async function toDoItemStatusChangeHandler(e) {
    let id = e.target.getAttribute('data-id');
    let toDoItem = toDoList.find(item => item.id == id);

    await updateToDoItem(id, toDoItem)

    if (toDoFilter == TO_DO_FILTER_ALL) {
        e.target.nextElementSibling.classList.toggle('done')
        e.target.nextElementSibling.classList.toggle('text-danger')
    } else {
        removeToDoElementFromDOM(id)
    }
}

async function removeButtonHandler(e) {
    let toDelete = confirm('Are you sure to remove?')
    if (toDelete) {
        let id = e.target.getAttribute('data-id');
        
        let success = await deleteToDoItem(id)
        if(success){
            toDoList = toDoList.filter(item => item.id != id)
            removeToDoElementFromDOM(id)
        }else{
            alert('Delete Failed')
        }
    }
}

function removeToDoElementFromDOM(id) {
    document.getElementById(id).remove()
}

function removeAllToDoElementsFromDOM() {
    toDoListContainer.innerHTML = ""
}

Array.from(toDoFilters).forEach(filter => {
    filter.addEventListener('change', toDoFilterHandler)
})

function toDoFilterHandler(e) {
    toDoFilter = e.target.getAttribute('data-status')
    storeFilterStatusToLocalStorage(toDoFilter)
    renderUIWithFilter()
}

function renderUIWithFilter() {
    let filteredToDoList = []
    switch (toDoFilter) {
        case TO_DO_FILTER_ALL:
            filteredToDoList = toDoList
            break;
        case TO_DO_FILTER_FINISHED:
            filteredToDoList = toDoList.filter(item => item.done)
            break;
        case TO_DO_FILTER_UNFINISHED:
            filteredToDoList = toDoList.filter(item => !item.done)
            break;
        default:
            filteredToDoList = toDoList
    }
    initUI(filteredToDoList)
}

function storeFilterStatusToLocalStorage(filter) {
    localStorage.setItem(TO_DO_FILTER, filter)
}

function getFilterStatusFromLocalStorage() {
    let data = localStorage.getItem(TO_DO_FILTER)
    if (data != null) {
        toDoFilter = data
    }
}

function setCurrentActiveFilter() {
    switch (toDoFilter) {
        case TO_DO_FILTER_ALL:
            toDoFilterAll.checked = true
            break;
        case TO_DO_FILTER_FINISHED:
            toDoFilterFinished.checked = true
            break;
        case TO_DO_FILTER_UNFINISHED:
            toDoFilterUnfinished.checked = true
            break;
    }
}

