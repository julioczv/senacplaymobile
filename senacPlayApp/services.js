import axios from 'axios'

// const api = axios.create({
//     baseURL: 'https://senacmobile.herokuapp.com'
// })

const api = axios.create({
    baseURL: 'http://192.168.10.104:4000/'
})

export default api;