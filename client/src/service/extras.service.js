import axios from "axios";

class ExtrasService {
  constructor() {
    this.app = axios.create({
      baseURL: "http://localhost:5000/api/extras",
    });
  }

  getAllExtras = () => this.app.get("/list");
}

export default ExtrasService;
