import db from '../config/database'

db.run(`
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    avatar TEXT
    )
`)

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

export default{
    createUserReposiory
}