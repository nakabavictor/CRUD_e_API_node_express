import userRepositories from "../repositories/userRepositories.js";
import bcrypt from 'bcrypt'

async function createUserService(newUser){
    const foundUser = await userRepositories.findUserByEmailRepository(newUser.email)
    if(foundUser) throw new Error("Usuario ja existe");
    
const passHash =await bcrypt.hash(newUser.password, 10)
    const user = await userRepositories.createUserReposiory({...newUser, password: passHash})
    if(!user) throw new Error("Erro ao criar usuario")
    return user;
}

export default{
    createUserService
}
