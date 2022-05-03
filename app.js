const express = require('express');
const app = express()
const port = 3000

// Configuración del servidor
app.use(express.static('public'));

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.get('/works', (req, res) => {
    res.sendFile(__dirname + '/views/works.html')
})

app.get('/photogallery', (req, res) => {
    res.sendFile(__dirname + '/views/photogallery.html')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  