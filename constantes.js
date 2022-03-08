//Consumo de API desde un cliente js

export const URI = "https://api.spotify.com/v1/artists/5YGY8feqx7naU7z4HrwZM6/top-tracks?market=US"

 const TOKEN = "Bearer BQCARbTU1ISLCOBzWhABdzqdT1Qqje_d6UBGrmD8StkAuqyDSkDZMQPVkqcWjffCLjhHGoplgDi8B2lXdeETFH9EX5YoR0uFpIKsi2NTZcJaj4WRm1YtIXJOnCMVit6RkiFuxA_B_cFlopOfDhTPWgnyINTSt0s"

//los parametro siempre van a ser objetos (tienen. 1.METODO,2.HEADERS,3.Body)
export const parametrosPeticiones = {

    method: "GET",
    headers: {

        Authorization: TOKEN
    }
}