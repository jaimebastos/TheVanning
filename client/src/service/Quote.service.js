import axios from "axios";

class QuoteService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/budget`,
      withCredentials: true,
    });
  }
  createQuote = (quoteDetails) => this.app.post("/create", quoteDetails);
}

export default QuoteService;
