let imt_result = document.getElementById('imt-result')
let weight = document.getElementById('weight')
let height = document.getElementById('height')
let btn = document.querySelector('.btn')
let text_sol = document.getElementById('text_solution')

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
        if(result < 35){
            imt_result.innerHTML = `${result} Ожирение 1 степени`
            text_sol.innerHTML = 'Ожирение 1 степени не является страшной болезнью и является излечимой cтоит только поменять образ жизни. \
            Первым что нужно поменять-это рацион питания. Суточная норма каллорий не должна превышать 1800.\
            Питание должно быть частым, примерно через каждые 3 часа, но в маленьких порциях (примерно размером с кулак).'
            
        }
        else if(35 < result && result <40){
            imt_result.innerHTML = `${result} Ожирение 2 степени`
        }
        else if(result > 40){
            imt_result.innerHTML = `${result} Ожирение 3 степени`
        }
    }
    else{
        imt_result.innerHTML = `Введите корректные данные`
    }
})
