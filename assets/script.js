let bill = document.getElementById('bill')
let people = document.getElementById('people')
let custom = document.getElementById('custom')
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

let btnInput = document.getElementsByClassName('btn-input')
let tipAmount = document.getElementById('tip-amount')
let total = document.getElementById('total')

bill.addEventListener('change', () => {
    let billNumber = parseInt(bill.value)
    for(let i = 0; i < btnInput.length; i++){
        btnInput[i].addEventListener('click', () => {
            let value = parseFloat(btnInput[i].value.replace('%', ''))
            let totalBill = (billNumber * (value / 100)) + billNumber
            let totalTip = totalBill - billNumber
            people.addEventListener('input', () => {
                if(people.value == 0){
                    console.log('0')
                }else{
                    let totalPerPerson = totalTip / parseInt(people.value)
                    tipAmount.innerHTML = "$"+totalPerPerson.toFixed(2)
                    let totalTipPerPerson = totalBill / parseInt(people.value)
                    total.innerHTML = '$' + totalTipPerPerson.toFixed(2)
                }
            })
        })

    }
})

console.log(typeof people.value)