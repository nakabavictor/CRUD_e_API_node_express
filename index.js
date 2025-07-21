import express from 'express'
import useRouter from './src/routes/userRouter.js'
const app = express()
const port = 7000

app.use(express.json())
app.use(useRouter)

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})