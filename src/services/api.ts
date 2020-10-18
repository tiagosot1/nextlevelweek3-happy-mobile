import axios from 'axios';

/* BaseURL utilizado o ip da máquina para que o celular/dipositivo físico 
possa conectar ao back.
Para emuladores pode utilizar o localhost
*/

const api = axios.create({
    baseURL: 'http://192.168.100.29:3333'
})

export default api;