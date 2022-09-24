function changeTitle(){
    let titleElement = document.getElementById('title')
    titleElement.innerHTML = 'DOM API Update by JS'
    titleElement.style.backgroundColor = 'red'
    titleElement.style.textTransform = 'uppercase'
}


function removeItem3Handler(e){
    e.target.disabled = true
    let item4ElementByQuerySelector = document.querySelector('.items > .item3')
    item4ElementByQuerySelector.remove();
}

function removeItem4Handler(e){
    let item4ElementByQuerySelector = document.querySelector('.items > .item4')
    item4ElementByQuerySelector.remove();
}

function alertItemRemove(){
    alert('Item is removed!')
}

function disableButton(e){
    e.target.disabled = true
}

let removeBtn3 = document.getElementById('remove_btn_3');
let removeBtn4 = document.getElementById('remove_btn_4');
let showNameBtn = document.getElementById('show_name_btn')

removeBtn3.onclick = removeItem3Handler

removeBtn4.addEventListener('click', removeItem4Handler)
removeBtn4.addEventListener('click', alertItemRemove)
removeBtn4.addEventListener('click', disableButton)

showNameBtn.addEventListener('click', (e) => {
    alert(document.getElementById('first_name').value)
})

