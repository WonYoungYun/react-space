import axios from 'axios';
import cfg from '../config'


export const getAPOD = (date = '') => axios.get(`https://api.nasa.gov/planetary/apod?api_key=${cfg.key}&date=${date}`)