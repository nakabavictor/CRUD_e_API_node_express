import express from 'express'
const app = express()
const port = 3000
app.use(express.json())

const users = []

app.post('/users', (req, res) => {
  const body = req.body
  users.push(body)
  res.status(200).send("Usuario cadastrado!")
})

app.get('/users', (req, res) =>{
  res.send({users})
})

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})