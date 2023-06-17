let cardButton = document.querySelectorAll(".button-card")
let totalCost = document.querySelector("#count")
let cardMenu = document.querySelector('#card-menu')

let itemCart = `
<div id="%id%" class ='container ul-div'>
    <ul data-price="%price%" data-count="%count%" style="display:inline">
        <li class="list-group-item list-group-item-secondary col-md-6" style="display:inline; float:left;">name : %title% </li>
        <li class="list-group-item list-group-item-secondary col-md-2" style="display:inline"> 
         <span  class="count_numbere px-2" style="background-color: white">1</span>
         </i>
        <li class="list-group-item list-group-item-secondary col-md-2" style="display:inline"> %price% </li>

    </ul>
    <img src="img/close.png" width="20" height="20" class="btn-close col-md-2 " id="delItem" onclick="del(this)">
    
</div>    
`

cardButton.forEach(btn => {
    btn.addEventListener("click", (e) => {
        addToCard(e.target)
        console.log(addToCard);
    })
})

function addToCard(item) {
    const parent = item.parentElement
    const ID = parent.querySelector(".unique-id").value;
    const title = parent.querySelector('.card-title').textContent
    let price = parent.querySelector('.price').textContent.replace("$", "")
    price = parseFloat(price)

    updatePrice(price)

    let element = itemCart.replace('%title%', title).replaceAll('%price%', price).replace("%id%", ID);

    const order = document.querySelector("#" + ID)
    console.log(order);
    if (order) {
      let orders =  order.querySelector(".count_numbere").textContent = parseInt(order.querySelector(".count_numbere").textContent) + 1

    } else {
        cardMenu.insertAdjacentHTML('beforeend', element)
    }
}



function updatePrice(newPrice) {
    let sumPrice = parseFloat(totalCost.textContent)
    totalCost.textContent = sumPrice + newPrice

}


function del(el) {
    let priceList = el.parentElement.querySelector('ul').getAttribute('data-price')
    let amountTotal = el.parentElement.querySelector('.count_numbere').innerHTML;
    let countPrice = document.querySelector("#count");
    let sumPriceList = (parseFloat(priceList) * parseFloat(amountTotal))
    countPrice.textContent -= sumPriceList
    console.log(countPrice); 
    el.parentElement.remove()



}
