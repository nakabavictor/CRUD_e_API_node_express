import useService from '../services/userServices.js'

async function creatUserController(req, res) {
    const newUser = req.body;

    try{
        const user = useService.createUserService(newUser)
        res.status(201).send({user})
    }catch(err){
        return res.status(400).send(e.message)
    }
}

export default{
    creatUserController
}