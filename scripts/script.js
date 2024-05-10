let calc=document.querySelector(".banner_calculator")
let weight=document.querySelector('.banner_inc_str')
let loss=document.querySelector('.banner_loss_weight')

calc.addEventListener("click", function(){
    window.location.assign("calc_page.html")
})

weight.addEventListener("click", function(){
    window.location.assign("weight.html")
})

loss.addEventListener("click", function(){
    window.location.assign("loss_weight.html")
})