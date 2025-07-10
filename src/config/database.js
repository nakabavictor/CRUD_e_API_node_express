import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('livraria_db.sqlite', (err) =>{
    if(err){
        console.log("Erro ao se conectar com o banco de dados", err.message)
    }else{
        console.log("Conectado com sucesso")
    }
})

export default db