export default function createErr(msg, errorCode = "SERVER_ERROR", statusCode = 500) {
  const err = new Error(msg)
  err.statusCode = statusCode
  err.errorCode = errorCode
  return err
}