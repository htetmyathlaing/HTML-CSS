let addToCartBtns = document.getElementsByClassName('add-to-cart-icon')
let plusBtns = document.getElementsByClassName('plus-btn')
let minusBtns = document.getElementsByClassName('minus-btn')
let cartCount = document.getElementById('cart-count')
let carts = []
const API_BASE_URL = 'https://json-server.cyclic.app/carts'

fetchCartItems()

Array.from(addToCartBtns).forEach(element => {
    element.addEventListener('click', (e) => {
        toggleAddToCartElements(element, element.nextElementSibling)
        increaseCartCount(e.target.getAttribute('data-id'))
    })
});


Array.from(minusBtns).forEach(element => {
    element.addEventListener('click', (e) => {
        decreaseCartCount(element.getAttribute('data-id'))
    })
})

Array.from(plusBtns).forEach(element => {
    element.addEventListener('click', (e) => {
        increaseCartCount(element.getAttribute('data-id'))
    })
})

function toggleAddToCartElements(addToCartBtn, addToCartBtnsWrapper) {
    addToCartBtn.classList.toggle('d-none')
    addToCartBtnsWrapper.classList.toggle('d-none')
}

function updateCartCountUI(productId) {
    countElement = document.querySelector(`button.count[data-id="${productId}"]`)
    cart = carts.find(c => c.product_id == productId)
    if (cart && countElement) {
        countElement.textContent = cart.count
    }
}

function increaseCartCount(productId) {
    cart = carts.find(c => c.product_id == productId)
    if (cart) {
        cart.count = cart.count + 1;
        updateCart(productId, cart)
    } else {
        data = {
            product_id: productId,
            count: 1,
        };
        addCart(productId, data)
    }
}

function decreaseCartCount(productId) {
    cart = carts.find(c => c.product_id == productId)
    if (cart) {
        if (cart.count == 1) {
            deleteCart(cart)
        } else {
            cart.count = cart.count - 1;
            updateCart(productId, cart)
        }
    }
}

function fetchCartItems() {
    fetch(API_BASE_URL)
        .then(response => response.json())
        .then(data => {
            carts = data
            initCartsUI()
        })
}

function addCart(productId, data){
    fetch(API_BASE_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            carts.push(data)
            updateCartCountUI(productId)
            updateCartCount()
        })
}


function updateCart(productId, data){
    fetch(`${API_BASE_URL}/${data.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            carts = carts.map(c => {
                if(c.product_id == productId){
                    c = data
                }
                return c
            })
            updateCartCountUI(productId)
        })
}

function deleteCart(cart){
    fetch(`${API_BASE_URL}/${cart.id}`, {
        method : "DELETE",
    }).then(res => {
        if(res.status == 200){
            carts = carts.filter(c => c.product_id != cart.product_id)
            addToCartBtn = document.querySelector(`button.add-to-cart-icon[data-id="${cart.product_id}"]`)
            addToCartBtnsWrapper = document.querySelector(`div.add-to-cart-btns-wrapper[data-id="${cart.product_id}"]`)
            toggleAddToCartElements(addToCartBtn, addToCartBtnsWrapper)
            updateCartCount()
        }
    })
}

function initCartsUI(){
    carts.forEach(cart => {
        addToCartBtn = document.querySelector(`button.add-to-cart-icon[data-id="${cart.product_id}"]`)
        addToCartBtnsWrapper = document.querySelector(`div.add-to-cart-btns-wrapper[data-id="${cart.product_id}"]`)
        toggleAddToCartElements(addToCartBtn, addToCartBtnsWrapper)
        updateCartCountUI(cart.product_id)
    })
    updateCartCount()
    
}

function updateCartCount(){
    if(carts.length){
        cartCount.textContent = carts.length
        cartCount.classList.remove('d-none')
    }else{
        cartCount.classList.add('d-none')
    }
}
