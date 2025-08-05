import userRepositories from "../repositories/userRepositories.js";

async function createUserService(newUser){
    const foundUser = await userRepositories.findUserByEmailRepository(newUser.email)
    if(foundUser) throw new Error("Usuario ja existe");
    
    const user = await userRepositories.createUserReposiory(newUser)
    return user;
}

export default{
    createUserService
}
