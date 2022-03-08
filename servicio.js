//Consumo de API desde un cliente js

const URI = "https://api.spotify.com/v1/artists/5YGY8feqx7naU7z4HrwZM6/top-tracks?market=US"

const TOKEN = "Bearer BQBz2YmWuaV_oka2ipd1eSjRmYEWunoirZjFmq9yMW8x1NaFWfkz8QewNiGmW9Az9q-HklDwj70auqravIJBC_xFXeRgIvHvJJnkOIF0IsUG0JmzmIw4PBbws8VhrDeOv2miCfCy6v3ZR86TxsQpTH7l_IZg1aA"

//los parametro siempre van a ser objetos (tienen. 1.METODO,2.HEADERS,3.Body)
const parametrosPeticiones = {

    method: "GET",
    headers: {

        Authorization: TOKEN
    }
}

//Ir a tocarle la puerta al server

fetch(URI, parametrosPeticiones)
    .then(function (respuesta) {

        return (respuesta.json())//1. verificar el formato JSON de la respuesta
    })
    .then(function (respuesta) {//2. Hago lo que quiera con la respuesta
        // console.log(respuesta.tracks)

        //console.log(cancion.name)
        //console.log(cancion.preview_url)
        //console.log(cancion.album.imagen[0].url)

        let ContenedorCanciones =document.getElementById("ContenedorCanciones")

        respuesta.tracks.forEach(function(cancion) {


            let columna = document.createElement("div")
            columna.classList.add("col")

            let tarjeta = document.createElement("div")
            tarjeta.classList.add("card")
            tarjeta.classList.add("h-100")

            let imagen = document.createElement("img")
            imagen.classList.add("card-img-top")
            imagen.classList.add("h-60")
            imagen.classList.add("p-3")
            imagen.src = (cancion.album.images[0].url)

            let separador = document.createElement("hr")
            separador.classList.add("w-75")
            separador.classList.add("mx-auto")
            separador.classList.add("d-block")
            separador.classList.add("borde")
            separador.classList.add("text-dark")

        
            let nombre = document.createElement("h5")
            nombre.classList.add("text-dark")
            nombre.classList.add("fw-bold")
            nombre.classList.add("text-center")
            nombre.textContent = cancion.name

            let cuadroTexto=document.createAttribute("div")
            cuadroTexto.classList.add("text-center")

            let preview = document.createElement("audio")
            preview.src = cancion.preview_url
            preview.setAttribute("controls","controls")

            tarjeta.appendChild(imagen)
            tarjeta.appendChild(separador)
            tarjeta.appendChild(nombre)
            tarjeta.appendChild(preview)
            tarjeta.appendChild(cuadroTexto)
            
            
            columna.appendChild(tarjeta)
            ContenedorCanciones.appendChild(columna)


        })

    })
    .catch(function (respuesta) {
        console.log("upss.." + respuesta)

    })// 3. mostrar el mensaje de error de la respuesta

/************************************ */

//Funcion pintar
//funcion encargada de recoger los datos y pintarlos en pantalla
function pintarCanciones(canciones) {
    console.log("estamos pintando...")
    console.log(canciones)
}


//





