var saldo = + 100

// // para restaer los imput a vacio
// function reset(){
//     valor = document.getElementsByTagName('input').value
//     valor = ''
// }

// funcion para monstrar saldo en 


const contenedorSaldo = (balance)=>{
    mysaldo = document.getElementById('mostrarSaldo')
    mysaldo.classList.remove('hide')
    mysaldo.classList.add('saldo')
    mysaldo.innerHTML = `TU SALDO ES $ ${balance}`
    /*setTimeout(function(){
        mysaldo.classList.remove('saldo')
        mysaldo.classList.add('hide')
    }, 10000)*/
}

contenedorSaldo(saldo)

// btnSaldo.addEventListener('click', (eventoPrevenir)=>{
//     eventoPrevenir.preventDefault()
//     console.log('clik mostar saldo')
//     contenedorSaldo(saldo)
// })

function validar(valorSumar){
    if(valorSumar === ""){
        console.log('no ingresaste dato')
    }
    else{
        // saldoNuevo = saldo + valorSumar
        saldo = saldo + valorSumar
        console.log('saldo actual ' + saldo)
        contenedorSaldo(saldo)
    }
}


btnSumar.addEventListener("click", function(evento){
    evento.preventDefault()
    console.log('ingrese dinero')
    let montoSumar = Number(document.getElementById("montoSumar").value) 
    validar(montoSumar)
})


btnRetirar.addEventListener('click', (evento)=>{
    evento.preventDefault()
    console.log('presionaste retirar')
    let monto = document.getElementById('montoRetirar').value
    valirdarRetirar(monto)
})

function valirdarRetirar (montoRetirar){
    if(montoRetirar === ''){
    console.log(`tu saldo es ${saldo}`)
    console.log(`Datos vacios, intraduce una cantidad`)
    }
    else if(saldo < montoRetirar ){
            console.log(`no tienes fondos sufificientes`)            
            
        }
    else{
        saldo = + saldo - montoRetirar
        console.log(`Retiraste ${montoRetirar}`)
        console.log(`saldo actual ${saldo}`)
        contenedorSaldo(saldo)
    }
}



salir.addEventListener('click',(eventoprevenir)=>{
    eventoprevenir.preventDefault()
    window.location.href = './index.html'

} )