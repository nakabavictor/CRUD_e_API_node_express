import useService from '../services/userService.js'

async function creatUserController(req, res) {
    const newUser = req.body;

    try{
        const user = await useService.createUserService(newUser)
        res.status(201).send({user})
    }catch(err){
        res.status(400).send(err.message)
    }
}

export default{
    creatUserController
}