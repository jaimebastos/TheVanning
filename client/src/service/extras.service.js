import axios from "axios";

class ExtrasService {
  constructor() {
    this.app = axios.create({
      baseURL: "http://localhost:5000/api/extras",
      withCredentials: true,
    });
  }
  getAllExtras = () => this.app.get("/list");
  createExtras = (extrasDetails, imageForm) => {
    return this.app.post("/create", extrasDetails, imageForm);
  };
  getOneExtra = (extras_id) => this.app.get(`/${extras_id}`);
  editOneExtra = (extras_id, extrasDetails) => this.app.put(`/edit/${extras_id}`, extrasDetails);
  deleteOneExtra = (extras_id) => this.app.get(`/delete/${extras_id}`)
  filterByCategory = (category) => this.app.get(`/list/${category}`)
}

export default ExtrasService;
