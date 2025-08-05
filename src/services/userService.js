import userRepositories from "../repositories/userRepositories.js";

async function createUserService(newUser){
    const user = await userRepositories.createUserReposiory(newUser)
    return user;
}

export default{
    createUserService
}
