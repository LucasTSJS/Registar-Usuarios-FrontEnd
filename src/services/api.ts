import axios from 'axios'

export const api = axios.create({
    baseURL: "https://registrar-usuarios.vercel.app"
})