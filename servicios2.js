//Consumo de API desde un cliente js

const URI = "https://api.spotify.com/v1/artists/5YGY8feqx7naU7z4HrwZM6/top-tracks?market=US"

const TOKEN = "Bearer BQCzga7ejOmqF2YQaYbaOt3OqjuzskELtpr6_Jbti9hhfQg7bFmxHZ8nCkzzFiwamuJDLhm-rjgCiVSzWVy6SY-GbQi2JZaFb3OWdomPttV0U8J71xbYnDAPoRUG3xtD8lO5MqohJ0sTRXKAg5UVmCz6TiMMPTw"

//los parametro siempre van a ser objetos (tienen. 1.METODO,2.HEADERS,3.Body)
const parametrosPeticiones = {

    method: "GET",
    headers: {

        Authorization: TOKEN
    }
}


//Funcion para consumir APIS (DATOS)
//de cualquier servidor con JS puro

async function consumirAPI(){

    let respuesta=await fetch(URI,parametrosPeticiones)
    let canciones=respuesta.json()
    return(canciones)
}

let resultado= await consumirAPI()
console.log(resultado)



       