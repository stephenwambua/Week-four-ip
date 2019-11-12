// Check out button event handling
$("#confirm").click(function() {
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
    // var Delivery = parseInt($("#delivery").val(),10);
    totalCosts=(pizza+crust+ptoppings)*pizzaNumber;
//    alert("Total is " + totalCosts);
   cell1.innerHTML = pizzaSize;
   cell2.innerHTML = pizzaToppings;
   cell3.innerHTML = pizzaCrusts;
   cell4.innerHTML = pizzaNumber;
   cell5.innerHTML = totalCosts;
});
var deliverCost = 250;
btn.onclick = function() {
  var chekingOut= prompt("Would you like your pizza delivered? if yes please state where.");
  if (chekingOut != null) {
    alert("Your delivery fee is 250/=")
    alert(`your total amount is ${totalCosts + deliverCost}`);
    alert("You will receive your order in 30 minutes....."); 
  }
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
