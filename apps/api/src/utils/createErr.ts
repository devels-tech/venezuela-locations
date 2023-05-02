export default function createErr(msg, errorCode = "SERVER_ERROR", statusCode = 500) {
  const err = new Error(msg) as any // TODO: modificar tipo Error
  err.statusCode = statusCode
  err.errorCode = errorCode
  return err
}