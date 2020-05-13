import axios from 'axios';

const apiBackend = axios.create({ baseURL: 'http://localhost:9898' })

export default apiBackend;