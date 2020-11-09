import axios from 'axios'
import { API_URL } from 'config/index'

export default axios.create({
    baseURL: API_URL
})