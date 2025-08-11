import userRepositories from "../repositories/userRepositories.js";
import bcrypt from 'bcrypt'

async function createUserService(newUser){
    //confirmar ver se nao existe um usuario com ao email ja criado
    const foundUser = await userRepositories.findUserByEmailRepository(newUser.email)
    if(foundUser) throw new Error("Usuario ja existe");
    

    //criptografia da senha
    const passHash = await bcrypt.hash(newUser.password, 10)
    const user = await userRepositories.createUserReposiory({...newUser, password: passHash})
    if(!user) throw new Error("Erro ao criar usuario")
    return user;
}

async function findAllUsersService() {
    const users = await userRepositories.findAllUsersRepository()
    return users
}

async function findUserByIdService(id) {
    const user = await userRepositories.findUserByIdRepository(id)
    if(!user) throw new Error("Usuario nao encontrado")
    return user
}

async function upadetUserService(newUser, userId) {
    const user = await userRepositories.findUserByIdRepository(userId)
    if(!user) throw new Error("Usuario nao encontarado")
    if(newUser.password){
        newUser.password = await bcrypt.hash(newUser.password, 10)
    }
    const userUpdated = userRepositories.updateUserRepository(newUser, userId)
    return userUpdated
}

export default{
    createUserService,
    findAllUsersService,
    findUserByIdService,
    upadetUserService,
}
