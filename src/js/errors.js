export default class ErrorRepository {
  constructor() {
    this.error = new Map();
  }

  translate(code) {
    if (this.error.has(code)) {
      return this.error.get(code);
    }
    return "Unknown error";
  }
}

const newError = new ErrorRepository();
newError.error.set(400, "");
newError.error.set(404, "Not Found ");
newError.error.set(500, "Internal Server Error");
