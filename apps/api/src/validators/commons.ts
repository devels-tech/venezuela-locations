import createErr from "@/utils/createErr";

function parseIntValidator(numberStr: string) {
  const value = parseInt(numberStr)

  if (isNaN(value)) {
    throw createErr('Invalidad Id', 'Invalidad params', 400)
  }

  return value
}

export { parseIntValidator }