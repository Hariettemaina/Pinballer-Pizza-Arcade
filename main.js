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


let crustPickAction = (crust,price)=>{
    currentCrust=crust
    currentCrustPrice=price
      

}

$(document).ready(function(){
    $('select').on('change', function(e){
         
        
        let pizzaSizeValue=this.value
        if(pizzaSizeValue !=='small'){
            if(this.value === 'medium'){
                currentSize ='medium'
                currentSizePrice = 10
                
                
            }else{
                currentSize ='large'
                currentSizePrice = 15
            }
                
        }else{
            currentSize ='small'
            currentSizePrice = 5
            
           
        }
        
      });
    
})

let selectTopping = (topping)=>{
    if(currentPizzaToppings.length>0){
        if(currentPizzaToppings.includes(topping.name) === false){
            currentPizzaToppings.push(topping.name) 
            currentToppingsPrice=currentToppingsPrice+5
        }else{
            const index = currentPizzaToppings.indexOf(topping.name);
            if (index > -1) {
                currentPizzaToppings.splice(index, 1); 
            }
            currentToppingsPrice=currentToppingsPrice-5
            
        }

    }else{
        currentPizzaToppings.push(topping.name)
        currentToppingsPrice=currentToppingsPrice+5
    }
    
   
    
    
    
}

let optInDelivery =(state)=>{
    $(document).ready(function(){
        if(state){
            $('#deliveryNote').show()  
            deliveryOptedInFee = 10


        }else{
            $('#deliveryNote').hide()

        }
        
        
        
    })

}

let pizzaQuantitySelect = (value)=>{
    pizzaQuantity = value

}
let Checkout = ()=>{
    let name = currentPizzaName
    let size = currentSize
    let sizePrice = Number(currentSizePrice)
    let crust = currentCrust
    let crustPrice = Number(currentCrustPrice)
    let toppings = currentPizzaToppings
    let toppingsPrice = Number(currentToppingsPrice)
    let quantity =pizzaQuantity
    let delivery = deliveryOption
    let deliveryFee = Number(deliveryOptedInFee)
    let newPizzaOrder = new Pizza(name,size,sizePrice,crust,crustPrice,toppings,toppingsPrice,delivery,deliveryFee,quantity)
    pizzaOrders.push(newPizzaOrder)
    computeFinalPrice()
    
}

let computeFinalPrice = ()=>{
    currentPizzasPrice =0
    pizzaOrders.forEach(pizza=>{
        let currentpizzaPrice =  pizza.sizePrice
        currentpizzaPrice=currentpizzaPrice+pizza.crustPrice
        currentpizzaPrice=currentpizzaPrice+pizza.toppingsPrice
        currentpizzaPrice = currentpizzaPrice*pizza.quantity
        currentpizzaPrice = currentpizzaPrice+pizza.deliveryFee
        currentPizzasPrice=currentPizzasPrice+ currentpizzaPrice
        
        


        
    })
    console.log(pizzaOrders)
    $(document).ready(function(){
    $('#pizzaList').show()
    $('#toppings').hide()
    })
    
    showData()


}
let showData =()=>{
    let myPizzas = document.getElementById('myPizzas')
    myPizzas = pizzaOrders
    let orderPrice = document.getElementById('totalPrice')
    
    orderPrice.innerText=currentPizzasPrice
    document.getElementById("myPizzas").innerHTML = JSON.stringify(pizzaOrders, null, 2);

}
