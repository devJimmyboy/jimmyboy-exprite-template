import dotenv from 'dotenv'
dotenv.config()

import { createServer } from 'http'
import express from 'express'

const app = express()
const server = createServer(app)

const PORT = Number(process.env.PORT || 3000)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
