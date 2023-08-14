const express = require('express')
const app = express()

const port = 3367

const path = require('path')
const basePath = path.join(__dirname,'templates')

const checkAuth = function(req,res,next){
  const auth = req.authStatus = true

  if(auth){
      console.log('Usuário logado,pode continuar')
      next()
  }else{
    console.log('Não esta logado,faça o login')
    next
  }
}
// usar o middleware
app.use(checkAuth)

app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})
app.listen(port,()=>{
    console.log(`Rodando na porta ${port}`)
})