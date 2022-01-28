let slider = document.querySelector("#slider");
let perSpan = document.querySelector("#per");
let tip = document.querySelector("#tip");
let price = document.querySelector("#price");
let total = document.querySelector("#total");

slider.addEventListener("change",function(){
    perSpan.textContent = slider.value;
    tip.value = (slider.value / price.value) * price.value;
    total.value += price.value;
})

