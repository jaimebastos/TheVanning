import axios from "axios";

class QuoteService {
  constructor() {
    this.app = axios.create({
      baseURL: "http://localhost:5000/api/budget",
      withCredentials: true,
    });
  }
  createQuote = (quoteDetails) => this.app.post("/create", quoteDetails);
}

export default QuoteService;
