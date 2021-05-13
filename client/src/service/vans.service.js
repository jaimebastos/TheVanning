import axios from 'axios'

class VansService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/vans',
            // withCredentials: true
        })
    }

    getAllVans = () => this.app.get('/list')
    getOneVan = van_id => this.app.get(`/${van_id}`)
    createVan = VansList => this.app.post(`/create`, VansList)
    updateVan = (van_id, VanList) => this.app.put(`/edit/${van_id}`, VanList)
}

export default VansService