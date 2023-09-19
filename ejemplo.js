import axios from "axios";

const listadoDeseries = async () => {
    const {data} = axios.get('https://fs0223-production.up.railway.app/v1/lista')
    return data
}

const crearSerie = async (newSerie) => {
    const {data} = axios.post('https://fs0223-production.up.railway.app/v1/lista', newSerie)
    return data
}

const listadoDeseriesConToken = async (token) => {
    const {data} = axios.get('https://fs0223-production.up.railway.app/v1/lista',{
        headers:{
            JWToken: token
        }
    })
    return data
}

const crearSerieConToken = async (newSerie,token) => {
    const {data} = axios.post('https://fs0223-production.up.railway.app/v1/lista', newSerie,{
        headers:{
            JWToken: token
        }
    })
    return data
}
const generarToken = async (email, password) =>{
    const {data} = axios.post('https://fs0223-production.up.railway.app/user/loginjwt',{
        email,
        password
    })
    return data.token
}


