import axios from "axios";

class ExtrasService {
  constructor() {
    this.app = axios.create({
      baseURL: "http://localhost:5000/api/extras",
      withCredentials: true,
    });
  }
  getAllExtras = () => this.app.get("/list");
  createExtras = extrasDetails => this.app.post(`/create`, extrasDetails)
  getOneExtra = extras_id => this.app.get(`/${extras_id}`)
}

export default ExtrasService;
