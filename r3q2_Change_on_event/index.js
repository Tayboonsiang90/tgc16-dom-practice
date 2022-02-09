let box = document.getElementById('the-box');

box.addEventListener("mouseover", function(){
    this.style.backgroundColor = "yellow"
})
box.addEventListener("mouseout", function(){
    this.style.backgroundColor = "white"
})