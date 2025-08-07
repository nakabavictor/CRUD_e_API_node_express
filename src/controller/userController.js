import userService from '../services/userService.js';
import useService from '../services/userService.js'

//controller basicamente "conversa" com o service e repository para insercao de dados no banmco de dados
async function creatUserController(req, res) {
    const newUser = req.body;

    try{
        const user = await useService.createUserService(newUser)
        res.status(201).send({user})
    }catch(err){
        res.status(410).json({erro: err.message})
    }
}

async function findAllUserController(req, res) {
    try{
        const users = await userService.findAllUsersService()
        res.send({users})
    }catch(err){
        return res.status(404).send(err.message)
    }
}

async function findUserByIdController() {

}


export default{
    creatUserController,
    findAllUserController,
    findUserByIdController,
}