import { Response } from '../helpers/http'

export const serverError = (response:Response) => {
  return response.status(500).json("Internal Server Error")
}