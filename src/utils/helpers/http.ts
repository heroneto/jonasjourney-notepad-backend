import { Response } from 'express'


export const ok = (body: any, response: Response, code=200) => {
  return response.status(code).json(body)
}

export const notFound = (value: string, response: Response) => {
  return response.status(200).json(`${value} not found`)
}


export {  Request, Response } from 'express'