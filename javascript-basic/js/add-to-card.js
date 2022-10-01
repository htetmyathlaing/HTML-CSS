let addToCartIcon = document.getElementById('add-to-cart-icon')
let addToCartBtnsWrapper = document.getElementById('add-to-cart-btns-wrapper')
let plusBtn = document.getElementById('plus-btn')
let minusBtn = document.getElementById('minus-btn')
let cartCountItem = document.getElementById('count')

let cartCount = 0

addToCartIcon.addEventListener('click', (e) => {
    toggleAddToCartElements()
    increaseCartCount()
    updateCartCountUI()
})


minusBtn.addEventListener('click', (e) => {
    decreaseCartCount()
    updateCartCountUI()
    if(cartCount == 0 ){
        toggleAddToCartElements()
    }
})

plusBtn.addEventListener('click', (e) => {
    increaseCartCount()
    updateCartCountUI()
})

function toggleAddToCartElements(){
    addToCartIcon.classList.toggle('d-none')
    addToCartBtnsWrapper.classList.toggle('d-none')
}

function updateCartCountUI(){
    // cartCountItem.innerHTML= cartCount
    cartCountItem.textContent = cartCount
}

function increaseCartCount(){
    cartCount++
}

function decreaseCartCount(){
    cartCount--
}
