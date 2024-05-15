let imt_result = document.getElementById('imt-result')
let weight = document.getElementById('weight')
let height = document.getElementById('height')
let btn = document.querySelector('.btn')

btn.addEventListener('click', function(){
    let heightM = (+height.value / 100)
    let result = +weight.value / (heightM * heightM)
    result = result.toFixed(1)
    if(result < 18.5){
        imt_result.innerHTML = `${result} Недостаточная масса тела (дефицит)`
    }
    else if( 18.5 <= result && result<= 25){
        imt_result.innerHTML = `${result} Норма`
    }
    else if( 25 < result && result < 30){
        imt_result.innerHTML = `${result} Избыточная масса тела (состояние, предшествующее ожирению)`
    }
    else if(result >= 30){
        imt_result.innerHTML = `${result} Ожирение`
    }
    else{
        imt_result.innerHTML = `Введите корректные данные`
    }
})
