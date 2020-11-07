import { Response } from '../helpers/http'

export const invalidParameter = (parameterName: string, response:Response) => {
  return response.status(400).json(`Invalid parameter ${parameterName}`)
}