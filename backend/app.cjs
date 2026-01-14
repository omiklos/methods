const express = require('express')
const path = require('path')
const {people} = require('./data.cjs')
const app = express()

function logger(req, res, next){
  console.log(req.method, req.url, req.queries)
  next()
}


app.use([express.static(path.join(__dirname, './public')), logger])

// app.get('/', (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, './frontend/html/index.html'))
// })
// app.get('/data', (req, res) => {
//   res.json(data)
// })

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './frontend/html/index.html'))
})


app.get('/data', (req, res) => {
  res.json(people)
})
app.post('/data', (req, res) => {
  
})






app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})