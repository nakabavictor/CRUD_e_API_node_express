import db from '../config/database.js'

//cadastrar o usuario
function createUserReposiory(newUser){
    return new Promise((resolve, reject) =>{
        const {username, email, password, avatar} = newUser
        db.run(
            `
            INSERT INTO users (username, email, password, avatar)
            VALUES(?, ?, ?, ?)
            `,
            [username, email, password, avatar],
            (err) =>{
                if(err){
                   reject(err)
                }
                else{
                    resolve({id: this.lastID, ...newUser})
                }
            }
        )
    })
}

//encontrar usuari pelo email
function findUserByEmailRepository(email){
    return new Promise((resolve, reject) =>{
        db.get(`
            SELECT id, username, email, avatar
            FROM users
            WHERE email = ?
        `, [email], (err, row) =>{
            if(err){
                reject(err)
            }else{
                resolve(row)
            }
        })
    })
}

//encontrar usuari pelo id
function findUserByIdRepository(id){
    return new Promise((resolve, reject)=>{
        db.get(
            `SELECT id, username, email, avatar 
            FROM users 
            WHERE id = ?`, [id], (err, row)=>{
            if(err){
                reject(err)
            }else{
                resolve(row)
            }
            }
        )
    })
}

function updateUserRepository(user, id){
    return new Promise((resolve, reject)=>{
       const {username, email, password, avatar} = user
        db.run(
            `UPDATE users SET 
                username= ?,
                email = ?,
                password = ?,
                avatar =?
            WHERE id = ?`, [username, email, password, avatar, id],
            (err)=>{
            if(err){
                reject(err)
            }else{
                resolve({id: id, ...user})
            }
            }
        )
    })
}

//encontrar todos os usuarios
function findAllUsersRepository(){
    return new Promise((resolve, reject)=>{
        db.all(
            `SELECT * FROM users`, [], (err, rows)=>{
            if(err){
                reject(err)
            }else{
                resolve(rows)
            }
            }
        )
    })
}

function deleteUserByIdRepository(id){
    return new Promise((resolve, reject)=>{
        db.run(
            `DELETE FROM users
            WHERE id = ?`, [id],
            (err)=>{
            if(err){
                reject(err)
            }else{
                resolve({message: "Usuario deletado com sucesso!", id})
            }
            }
        )
    })
}

export default{
    createUserReposiory,
    findUserByEmailRepository,
    findUserByIdRepository,
    findAllUsersRepository,
    updateUserRepository,
    deleteUserByIdRepository,
}