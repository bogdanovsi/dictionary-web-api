import axios from 'axios';

export default() => {
    return axios.create({
      baseURL: `http://${process.env.APP_API_URL || 'localhost'}:3000/`
    })
  }