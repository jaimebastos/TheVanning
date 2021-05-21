import axios from 'axios'

class VansService {

    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/vans`,
            withCredentials: true
        })
    }

    getAllVans = () => this.app.get('/list')
    getOneVan = van_id => this.app.get(`/${van_id}`)
    createVan = VansList => this.app.post(`/create`, VansList)
    updateVan = (van_id, VanList) => this.app.put(`/edit/${van_id}`, VanList)
    deleteOneVan = (van_id) => this.app.delete(`/delete/${van_id}`)
    findBaseVans = (boolean) => this.app.get(`/list/${boolean}`)
}

export default VansService