const dbUser = "hola"
const dbPassword = "1234"


// const loggin = document.getElementById('botonEnviar')
//     let logeame = addEventListener('submit', ()=>{
//         window.location.href= './home.html'
//     })

// const crear = (user) => {
//     let span = document.createElement("span")
//     span.classList.add("lista")
//     span.innerHTML = `Bievenido ${user}`

//     let render = document.getElementById('render')
//     render.appendChild(span)
// }

//fucnion para validar los errores

function errores(tipo){
    let error = document.getElementById(`error${tipo}`)
    error.classList.remove("hide")
    error.classList.add("error")
    setTimeout(function(){
        error.classList.remove("error")
        error.classList.add("hide")
    },4000)
}


/*
const soyclic = function(){
    alert("soy clic")
}

// funcion para una alerta si el usuario no existe

function clic(){
    const soyclic = function(){
        alert("soyunalet")
    }
    
    let alerta = document.getElementById("botonEnviar")
    alerta.addEventListener("click", soyclic)
    
}
*/
inicioSesion.addEventListener("submit", function(evento){
    evento.preventDefault() /*metado predefinido JS para que no envie datos al servidor(prevenir la funcion por defaul) */
    // para validar el vento submit se aplique
    // console.log("le diste clic submit")
    let usuario = document.getElementById("usuario").value
    let password = document.getElementById("password").value
    
    validar(usuario,password)
    
})


function validar(u,p){
    if (u === "" && p === "") {
        console.log("ingresa datos")
        errores("Datos")
    } 
    else{
        if(u === dbUser && p === dbPassword){
            console.log('ingresaste a tu cuenta')
            window.location.href = './home.html'
        }
        else if(u != dbUser){
            console.log("Usuario Incorrecto")
            errores("Usuario")
        }
        else if(p != dbPassword){
            console.log("Password Icorrecto")
            errores("Password")
        }
        // else{
        //     consol("Datos no encontrados")
        // }
    }
}

// codigo de HOME.HTML

