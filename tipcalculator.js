/* Declare Query Selectors */

let slider = document.querySelector("#slider");
let perSpan = document.querySelector("#per");
let tip = document.querySelector("#tip");
let price = document.querySelector("#price");
let total = document.querySelector("#total");
let sum = 0;
let slide = "";
let initial = "";
let cool = 0;

/* Changes Slider and assigns it's value */

slider.addEventListener("change", function(){
    perSpan.textContent = this.value;
    slide = this.value;
   
})

/* When price is changed Tip and Total listen for the price and slider */

 price.addEventListener("change", function(){
    initial = parseInt(this.value);
    slider.addEventListener("change", function(){
    perSpan.textContent = this.value;
    slide = parseFloat(this.value);
    cool = Math.floor((slide / 100 ) * initial);
    tip.textContent = cool;
    total.textContent = cool + initial;
})
    
})




