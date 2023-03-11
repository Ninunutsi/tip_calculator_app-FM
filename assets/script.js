let bill = document.getElementById('bill')
let people = document.getElementById('people')
let custom = document.getElementById('custom') //
let valid = document.getElementsByClassName('valid')
let billInput = document.getElementsByClassName('bill-input')
let divBill = document.getElementById('div-bill')
let divPeople = document.getElementById('div-people')
let zero = document.getElementsByClassName("zero")

    for(let i = 0; i < billInput.length; i ++){
        let para = document.createElement('p')
        billInput[i].addEventListener('input', () => {
            if(billInput[i].value == 0){      
                para.innerHTML = "Can't be zero"
                para.style.color = '#E17052'
                para.style.position = 'absolute'
                para.style.right = '10px'
                zero[i].appendChild(para)
                billInput[i].style.border = '2px solid #E17052'
            }else{
                para.innerHTML = ''
                billInput[i].style.border = '2px solid #26C2AE'
            }
        })
    }


for(let i = 0; i < valid.length; i ++){
    valid[i].addEventListener('input', () => {
        valid[i].value = valid[i].value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    })
}

// gilakebi

let btnsTips = document.getElementsByClassName('btn-input')
let tipAmount = document.getElementById('tip-amount')
let total = document.getElementById('total')

let inputedBill
let inputedPeople
let inputedPercent

function billFunc(){
    inputedBill = parseInt(bill.value)
    calc()
}

function peopleFunc(){
    inputedPeople = parseInt(people.value)
    if(inputedPeople < 1){
        console.log("less than one")
    }else{
        calc()
    }
}

let tips
let inputedCustom
function percent(btn){
    if(custom.value === ''){
        console.log('custom empty')
    }else{
        console.log(custom.value + 'custom not empty')
        inputedCustom = parseInt(custom.value)
        inputedPercent = inputedCustom
        calc()
    }
    inputedPercent = parseInt(btn.value.replace('%', ''))
    calc()
}

function calc(){
        if(inputedPeople >= 1 && inputedPercent != undefined){
            const totalBill = (inputedBill * (inputedPercent / 100)) + inputedBill
            const totalTip = totalBill - inputedBill
            const tipFinal = totalTip / inputedPeople
            const totalFinal = totalBill / inputedPeople
    
            tipAmount.innerHTML = `$${tipFinal.toFixed(2)}`
            total.innerHTML = `$${totalFinal.toFixed(2)}`
            console.log('inputed percent' +inputedPercent)
        }else{
            console.log('woalla')
        }
}

let selectedBtn = null

bill.addEventListener('input', billFunc)
people.addEventListener('input', peopleFunc)
for(let i = 0; i < btnsTips.length; i++){
    btnsTips[i].addEventListener('click', () => {
        if(selectedBtn){
            selectedBtn.style.backgroundColor = '#00474B';
            selectedBtn.style.color = 'white'
        }
        if(btnsTips[i] !== selectedBtn) {
            selectedBtn = btnsTips[i];
            btnsTips[i].style.backgroundColor = '#9FE8DF'
            btnsTips[i].style.color = '#00474B'
        }else{
            selectedBtn = null
        } 
        percent(btnsTips[i])
    })
}
custom.addEventListener('input', () => {
    percent(custom)
})

let reset = document.getElementById('reset')
reset.addEventListener('click', () => {
    inputedBill = 0
    bill.value = ''
    inputedPeople = 0
    people.value = ''
    for(let i = 0; i < btnsTips.length; i++){
        btnsTips[i].style.backgroundColor = '#00474B';
        btnsTips[i].style.color = 'white'
    }
    inputedPercent = 0
    inputedCustom = 0
    custom.value = ''

    tipAmount.innerHTML = `$0.00`
    total.innerHTML = `$0.00`
})
