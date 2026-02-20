import express from 'express'
const app = express()
//Metodo => GET, POST, PUT/PATCH, DELETE
//Name => / - sempre no plural
// callback functions => Onde executamos o backend (logica, regra de negocio)

app.use(express.json());
const users = []

app.post('/users', (req, res) => {
  console.log(req)
  const body = req.body
  users.push(body)
  res.status(201).send('Usuario criado com sucesso')
});

app.get('/users', (req, res) => {
  res.send({users})
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})