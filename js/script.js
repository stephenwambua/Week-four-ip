// Check out button event handling
$( "#checkout" ).click(function() {
    var pizza= parseInt($( "#psizes option:selected" ).val(),10);  
    console.log(typeof(pizza))
    var crust = parseInt($("#pcrusts option:selected").val(),10); 
    var ptoppings = parseInt($("#pTopping option:selected").val(),10); 
    var pizzaNumber = parseInt($("#pizzano").val(),10); 
    var Delivery = parseInt($("#delivery").val(),10);
    totalCosts=((pizza+crust+ptoppings)*pizzaNumber)+Delivery;
   alert("totoal is " + totalCosts+"And the delivery fee is:"+Delivery);
  
})

// Checkout end

let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let btn = document.getElementById("myBtn");
let btnCheckout = document.getElementById("checkout");
btnCheckout.onclick = function(){

}
btn.onclick = function(){
    modal.style.display = "block";
}
span.onclick = function(){
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

// Pizza Sizes
function pizzaSizes(large, medium, small){
    this.large =large;
    this.medium=medium;
    this.small=small;
}
let newPizza= new pizzaSizes(1200, 1000, 1500, 1300)

// Pizza Crusts
function pizzaCrust(crispy, stuffed, gluttenFree){
    this.crispy = crispy;
    this.stuffed = stuffed;
    this.gluttenFree = gluttenFree;
}
let newCrust= new pizzaCrust(200, 100, 150, 130)

// Pizza Toppings
function pizzaTopping(Cheese, Pepperoni, Meat, Veggies){
    this.Cheese = Cheese;
    this.Pepperoni = Pepperoni;
    this.Meat = Meat;
    this.Veggies = Veggies;
}
let newTopping= new pizzaTopping(1200, 1000, 1500, 1300)



