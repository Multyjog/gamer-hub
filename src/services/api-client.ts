import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fcca6e50a8b54b1492dc75637e91ca71'
    }
})