let slider = document.querySelector("#slider");
let perSpan = document.querySelector("#per");
let tip = document.querySelector("#tip");
let price = document.querySelector("#price");
let total = document.querySelector("#total");
let slide = 0;
let initial = 0;
total.addEventListener("change",function(){
    
})
slider.addEventListener("change", function(){
    perSpan.textContent = this.value;
    slide = this.value;
})
price.addEventListener("change", function(){
    initial = this.value;
})



