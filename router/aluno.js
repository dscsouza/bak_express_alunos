var express = require('express');
var router = express.Router();

//base de dados alunos
let alunos = [
    {id: 1, nome: "José"},
    {id: 2, nome: "Maria"},
    {id: 3, nome: "João"},
    {id: 4, nome: "Marcos"},
]

// a requisição vai passar por esses router de forma sequencial, caso não tenham sido passados
//parâmetros FORM, ele segue para query e depois pelo params




//dessa forma a requisição está vindo em formato de FORM
//localhost:3000/aluno << aqui vai a requisição
router.get("/", (req, res, next)=>{
    
    console.log(req.body);
    
    let aluno = alunos[req.body.id]
    if (aluno){ //se existir registro do ID, retorna o resultado
        res.json(aluno);
    }else{ //caso não encontre, o next() indica que deve passar para o próximo middleware
        next()
    }
    
})


//dessa forma estamos pegando a requisição por uma query
//localhost:3000/alunoq?id=2 << aqui vai a requisição
router.get("/", (req, res, next)=>{
    
    console.log(req.query.id);
    let aluno = alunos[req.query.id]
    if (aluno){
        res.json(aluno);
    } else {
        res.send('Aluno não encontrado')
    }
    
})



//retorna todos os alunos
router.get("/all", (req, res)=>{  

    res.json(alunos)
})

//dessa forma estamos pegando a requisição pelo params
//localhost:3000/alunop/2 << aqui vai a requisição
router.get("/:id", (req, res)=>{
    
    console.log(req.params.id);
    let aluno = alunos[req.params.id]
    res.send(aluno);
})

//exportando a rota
module.exports = router;