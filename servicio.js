// pasos para consumir datos de un API con JS puro
// 1. voy a decir para donde voy (URI del servicio)

const URI="https://api.spotify.com/v1/artists/5YGY8feqx7naU7z4HrwZM6/top-tracks?market=US"

// 2. Nenecito permisos

const TOKEN="Bearer BQCF6PGdu29lTaqcMY9qjEAjFoGoZU_1mtgqLiXwg5elFsXCR2nIp6-CUQzwPs5Fb5l5l5T0L1ivECRc4HEI98W7aJiWS9UwGtzloSdw2qiOpeJsMWk78gPLrBf76C-Hc_DzLSbPdJ5NSY_5XYnnPng7Loi6p_W4NNk"


// 3. configuro metodo,cabeceras y cuerpo de la peticion
let parametrosPeticion={

    method:"GET",
    headers:{Authorization:TOKEN}
}

// 4. Arranco ( consumo API, le toco la puerta al servidor)

fetch(URI,parametrosPeticion)
/*.then(function(respuesta){

    return respuesta.json()
})
.then(function(respuestaJSON){

    console.log(respuestaJSON)
})
.catch(function(respuestaERROR){

    console.log(respuestaERROR)

})*/

// funcion flecha



 .then(respuesta=> respuesta.json())


 .then(respuestaJSON=>console.log(respuestaJSON.tracks))


.catch(respuestaERROR=> console.log(respuestaERROR))

array.forEach( => {
    
});