// selecting dom
let titleElement = document.getElementById('title')
let itemElementsByClassName = document.getElementsByClassName('items') // HTMLCollection
let itemElementsByTagName = document.getElementsByTagName('div') // HTMLCollection
let inputElementByName = document.getElementsByName('first_name'); // NodeList

// titleElement = document.querySelector('#title')
let itemElementByQuerySelector = document.querySelector('.items')
let item1ElementByQuerySelector = document.querySelector('.items > .item1')
let item4ElementByQuerySelector = document.querySelector('.items > .item4')
let itemElementByQuerySelectorAll = document.querySelectorAll('.items') // NodeList


// changing dom
titleElement.innerHTML = 'DOM API Update by JS'
titleElement.style.backgroundColor = 'red'
titleElement.style.textTransform = 'uppercase'

// inserting dom
let contentElement = document.getElementById('content')
let descriptionNode = document.createElement('p');
descriptionNode.innerHTML = 'This is description';

contentElement.appendChild(descriptionNode);

/**
 * removing dom
 **/
// self remove
item4ElementByQuerySelector.remove();

// removing child
itemElementByQuerySelector.removeChild(item1ElementByQuerySelector)