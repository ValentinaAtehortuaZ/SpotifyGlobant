//Consumo de API desde un cliente js

export const URIMileyCyrus="https://api.spotify.com/v1/artists/5YGY8feqx7naU7z4HrwZM6/top-tracks?market=US"
export const URIAdele="https://api.spotify.com/v1/artists/4dpARuHxo51G3z768sgnrY/top-tracks?market=US" 
export const URIKatyPerry="https://api.spotify.com/v1/artists/6jJ0s89eD6GaHleKKya26X/top-tracks?market=US"
export const URIArianaGrande="https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR/top-tracks?market=US"
export const URILanaDelRey="https://api.spotify.com/v1/artists/00FQb4jTyendYWaN8pK0wa/top-tracks?market=US"

 const TOKEN = "Bearer BQCJxdeDVD_CgtDc9IcPUlzbx4Xi79rsb9AUYj4iCK9UV4F82VmjokJIka6qWGEvKLNbQH4oc-M9M2jjWFrBLOECBy_o_lLgUsTfc9mRc2E-Ogm6A-TNREJ43jFxeGK__8O3lwks7eno1zcwdDG0D2RcQpKguQk"

//los parametro siempre van a ser objetos (tienen. 1.METODO,2.HEADERS,3.Body)
export const parametrosPeticiones = {

    method: "GET",
    headers: {

        Authorization: TOKEN
    }
}