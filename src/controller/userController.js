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

async function findUserByIdController(req, res) {
    const {id} = req.params;
    try{
        const user = await userService.findUserByIdService(id)
        res.send({user})
    }catch(err){
        return res.status(403).send(err.message)
    }
}

async function updateUserController(req, res){
    const {id} = req.params
    const newUser = req.body
    try{
        const user = await userService.upadetUserService(newUser, id)
        res.send({user})
    }
    catch(err){
        res.status(404).send(err.message)
    }
}

async function deleteUserController(req, res){
    const {id} = req.params
    try{
        const message = await userService.deleteUserService(id)
        res.send("Usuario deletado!")
    }catch(err){
        res.status(406).send(err.message)
    }
}


export default{
    creatUserController,
    findAllUserController,
    findUserByIdController,
    updateUserController,
    deleteUserController,
}