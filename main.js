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
}
let pizzaOrders =[]
let currentPizzaName = null;
let currentPizzasPrice = 0;
let currentCrust ='';
let currentCrustPrice =0;
let currentSizePrice =5;
let currentSize=''
let currentPizzaToppings=[]
let currentToppingsPrice =0
let pizzaQuantity =1
let deliveryOption = false
let deliveryOptedInFee =0
let pickPizzaAction = (pizzaName) => {
    currentPizzaName = pizzaName
    pizzaQuantity=1
    $(document).ready(function(){
        $('#toppings').show()
        $('#pizzaList').hide()
        $('#welcomemessage').hide()
        $('#customizemessage').show()
        $("#price").val(currentPizzasPrice);
        $('#deliveryNote').hide()
        
    })
    
}
