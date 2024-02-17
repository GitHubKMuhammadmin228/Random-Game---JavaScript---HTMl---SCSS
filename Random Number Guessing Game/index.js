let ok = document.querySelector('#ok')
let back = document.querySelector('#back')
let display = document.querySelector('#display')
let IamAgree = document.querySelector('#IamAgree')
let getNumber = document.querySelectorAll('.getNumber')

let count = 1
let maxOfNumber = 0
let numberOfAttempt = 0
let numberOfAttempt2 = 0
let GETRandomNumber = null

let RandomNumber = (max) => Math.floor(Math.random() * max) + 1

IamAgree.addEventListener('click', () => {
    maxOfNumber = Number(document.querySelector('#maxOfNumber').value)
    numberOfAttempt = Number(document.querySelector('#numberOfAttempt').value)

    numberOfAttempt2 =  numberOfAttempt

    let modal = document.querySelector('.modal')
    cardBlur = document.querySelector('.card')

    modal.classList.remove('show')
    cardBlur.classList.remove('blur')

    GETRandomNumber = RandomNumber(maxOfNumber)
})

for (let i of getNumber) i.addEventListener('click', () => display.textContent += i?.textContent)

back.addEventListener('click', () =>display.textContent = display.textContent.slice(0,-1))

const AlertFuc = (spanInnerHTML, typeAlert, load) => {
    const alert = document.querySelector(".alert")
    const span = document.querySelector(".span")

    span.innerHTML = spanInnerHTML

    alert.classList.add('show', typeAlert)

    setTimeout(() => {
        alert.classList.remove('show', typeAlert)

        if (load) window.location.reload()

        span.innerHTML = ""
    }, 4000)
}

ok.addEventListener('click', () => {
    if (display.textContent.length > 0) {
        if (numberOfAttempt <= 0) {
            AlertFuc (`<strong>You Lose!</strong> Siz topa olmadingiz. Urunishlar soni ${count} / ${numberOfAttempt2} Men O'ylagan son ${GETRandomNumber}`, `alert-danger`, true)
        } else if(display.textContent == GETRandomNumber){
            AlertFuc(`<strong>You Win !</strong> Siz yutdigiz ${count} / ${numberOfAttempt2} ta urunishda topdingiz`, `alert-success`, true)
        } else if (display.textContent > GETRandomNumber){
            AlertFuc(`<strong>You Warning !</strong> Siz kiritgan son katta. Urunishlar soni: ${count} / ${numberOfAttempt2}`,  `alert-warning`, false)
        } else if (display.textContent < GETRandomNumber){
            AlertFuc(`<strong>You Warning !</strong> Siz kiritgan son kichik. Urunishlar soni: ${count} / ${numberOfAttempt2}`,  `alert-warning`, false)
        }       
        count++
        numberOfAttempt--
        display.textContent = ""
    } else AlertFuc (`<strong>You Stop!</strong> Siz hech qanday son kirtmadingiz!`, `alert-warning`, `false`)
})