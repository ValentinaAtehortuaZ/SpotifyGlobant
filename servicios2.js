//Consumo de API desde un cliente js

import {URI,parametrosPeticiones} from "./constantes.js"

//Funcion para consumir APIS (DATOS)
//de cualquier servidor con JS puro

async function consumirAPI(){

    let respuesta=await fetch(URI,parametrosPeticiones)
    let canciones=respuesta.json()
    return(canciones)
}

export let resultado= await consumirAPI()




       