const express = require('express')
const app = express()
const port = 5001

const path = require('path')
const basePath = path.join(__dirname, 'templates')
//final
app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})
//deve ser criado depois da ultima rota(home)
//isso é um MIDDLEWARE
app.use(function(req,res,next){
     res.status(404).sendFile(`${basePath}/404.html`)
})

//quase final
app.listen(port, () => {
    console.log(`Servidor on ${port} 🐼`)
})