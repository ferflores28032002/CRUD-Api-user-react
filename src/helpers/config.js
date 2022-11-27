import axios from 'axios'


const usuarios = axios.create({
    baseURL: 'http://localhost:4000/api/v1'
})



export default usuarios