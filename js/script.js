// Check out button event handling
$("#confirm").click(function() {
    modal.style.display = "block";
    // var pizzaSize = document.getElementById("psizes").text;
    var pizzaSize=$( "#psizes option:selected" ).text();
    var pizzaToppings=$("#pTopping option:selected").text();
    var pizzaCrusts =$("#pcrusts option:selected").text();  
    var pizza= parseInt($( "#psizes option:selected" ).val(),10); 
    var crust = parseInt($("#pcrusts option:selected").val(),10); 
    var ptoppings = parseInt($("#pTopping option:selected").val(),10);
    var pizzaNumber = parseInt($("#pizzano").val(),10); 
    var tbl = document.getElementById("myTable");
    var row = tbl.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell(); 
    var cell3 = row.insertCell(); 
    var cell4 = row.insertCell();
    var cell5 = row.insertCell(); 

   totalCosts=(pizza+crust+ptoppings)*pizzaNumber;
   cell1.innerHTML = pizzaSize;
   cell2.innerHTML = pizzaToppings;
   cell3.innerHTML = pizzaCrusts;
   cell4.innerHTML = pizzaNumber;
   cell5.innerHTML = totalCosts;
});
var checkOutBtn = document.getElementById("checkout");
var deliverCost = 250;
checkOutBtn.onclick = function() {
  var chekingOut= prompt("Would you like your pizza delivered? if yes please state where.");
  if (chekingOut != null) {
    alert("Your Request has been received. Delivery fee is 250/=");
    alert(`Your total cost is ${totalCosts + deliverCost}`);
  }
}
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
$("#addToCart").click(function(){
    modal.style.display = "none";
})
$("#checkout").click(function(){
    modal.style.display = "none";
})