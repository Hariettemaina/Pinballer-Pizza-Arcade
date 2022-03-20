$(document).ready(function(){
    $('#toppings').hide()
    $('#customizemessage').hide()
    // $('#orderList').hide()
    let orderPrice = document.getElementById('totalPrice')
    
    orderPrice.innerText=currentPizzasPrice

})

class Pizza {
    constructor(name,size,sizePrice,crust,crustPrice, toppings,toppingsPrice,delivery,deliveryFee,quantity) {
      this.name = name  
      this.size = size;
      this.sizePrice = sizePrice
      this.crust = crust;
      this.crustPrice = crustPrice
      this.toppings = toppings;
      this.toppingsPrice = toppingsPrice
      this.delivery = delivery;
      this.deliveryFee = deliveryFee
      this.quantity = quantity;
    }