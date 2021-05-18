import axios from "axios";
class UploadsService {
  constructor() {
    this.app = axios.create({
      baseURL: "http://localhost:5000/api/uploads",
      withCredentials: true,
    });
  }

  uploadimage = (imageForm) => this.app.post("/image", imageForm);
  uploadSingleImage = (imageForm) => this.app.post("/singleImage", imageForm);
}

export default UploadsService;
