class ErrorHandler extends Error {
  status_code: number;
  constructor(message: string, status_code: number) {
    super(message);
    this.status_code = status_code;
    Error.captureStackTrace(this, this.constructor);
  }
}
export default ErrorHandler;
