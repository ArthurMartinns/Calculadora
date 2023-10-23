const teclasNum = document.querySelectorAll(".num");
console.log(teclasNum)
const teclasOperacao = document.querySelectorAll(".op");
console.log(teclasOperacao)
const display = document.querySelector(".display");
const limpar = document.getElementById("limpar")
const ton = document.getElementById("ton")
const teclaRes = document.querySelector(".rest");
const igual = document.getElementById("igual");

let sinal = false
let decimal = false

teclasNum.forEach((el) => {
    el.addEventListener("click", (evt) => {
        sinal = false
        if (evt.target.innerHTML == ",") {
            if (!decimal) {
                decimal = true
                if (display.innerHTML == "0") {
                    display.innerHTML = "0,"
                } else {
                    display.innerHTML += evt.target.innerHTML
                }
            }
        } else {
            if (display.innerHTML == "0") {
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML
        }

    })
})
teclasOperacao.forEach((el) => {
    el.addEventListener("click", (evt) => {
        if (!sinal) {
            sinal = true
            if (display.innerHTML == "0") {
                display.innerHTML = ""
            }
            if (evt.target.innerHTML == "x") {
                display.innerHTML += "*"
            }
            else {
                display.innerHTML += evt.target.innerHTML
            }
        }

    })
})

limpar.addEventListener("click", (evt) => {
    sinal = false
    decimal = false
    display.innerHTML = "0"
})

igual.addEventListener("click", (evt) => {
    sinal=false
    decimal=false
    const res=eval(display.innerHTML)
    display.innerHTML=res
})