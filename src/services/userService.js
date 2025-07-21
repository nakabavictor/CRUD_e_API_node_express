import userRepositories from "../repositories/userRepositories";

async function createUserService(newUser){
    const user = await userRepositories.createUserReposiory(newUser)
    return user;
}

export default{
    createUserService
}
