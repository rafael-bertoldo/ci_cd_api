import express, { Application, Request, Response } from 'express'

const app: Application = express()

app.get('/', (req: Request, res: Response): Response => {
  return res.send('Hello, World!')
})

export default app