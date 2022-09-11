const express = require('express')
const app = express()

app.use(express.static('public'))
app.use('./css', express.static(__dirname + 'public/css'))
app.use('./js', express.static(__dirname + 'public/js'))

//set views
app.set('views', './views')

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.listen(3000)