const express = require('express')
const router = express.Router()


const path = require('path')
const basePath = path.join(__dirname, '../templates')
                            //users/template
                           // tem que sair nivel de pasta
//rotas de usuário.

//buscar a pag de formulário de usuário
//listar
router.get('/add', (request, response) => {
    response.sendFile(`${basePath}/userForm.html`)
})

//Cadastrar usuário
router.post('/save', (request, response) => {
    const { name, age } = request.body

    console.log(`Nome: ${name} e Idade: ${age}`)
    //para parar de carregar em loop,no caso uma resposta para depois do cadastro

    // const query = `SELECT INTO tb_users (name,age) VALUES(${name}, ${age})`- spoiler da aula
    response.sendFile(`${basePath}/userForm.html`)
})

module.exports = router