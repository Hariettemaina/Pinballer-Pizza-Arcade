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