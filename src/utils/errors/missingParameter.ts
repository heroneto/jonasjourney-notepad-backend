import { Response } from '../helpers/http'

export const missingParameter = (parameterName: string, response:Response) => {
  return response.status(400).json(`Missing parameter ${parameterName}`)
}