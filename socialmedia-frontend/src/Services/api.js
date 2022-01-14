
import axios from 'axios'

const api = axios.create({
    baseURL : 'https://prototipo-partyf.herokuapp.com/'
})

export default api