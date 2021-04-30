// Inicialização do express | SERVIDOR
const express = require("express")
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

/* ----------------------------------------------------------------------------------------------------------- */

// Engine Nunjucks | TEMPLATE ENGINE
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})
/* ----------------------------------------------------------------------------------------------------------- */

// configurar pasta public | CONFIG SERVIDOR
server.use(express.static("public"))

/* ----------------------------------------------------------------------------------------------------------- */

// habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extended: true }))

/* ----------------------------------------------------------------------------------------------------------- */

// ATIVANDO ROTAS
// index
server.get("/", pageLanding) 
// study
server.get("/study", pageStudy)
// give classes
server.get("/give-classes", pageGiveClasses)
server.post("/save-class", saveClasses)

/* ----------------------------------------------------------------------------------------------------------- */

// ligar o servidor
server.listen(3000)