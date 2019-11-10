let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let btn = document.getElementById("myBtn");
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