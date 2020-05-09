import axios from 'axios';

const apiWeather = axios.create({ baseURL: 'http://localhost:9898' })

export default apiWeather;