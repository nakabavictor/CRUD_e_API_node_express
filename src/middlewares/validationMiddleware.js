//validade recebe a funcao anonima e assincrona para enbviar a mensagem de erro ou sucesso dizendo qual foi o erro em caso de erro (ainda nao funciona com username)
const validate = (schema) => async (req, res, next) => {
    try {
        await schema.parse(req.body)
        next();
    }catch (error) {
        return res.status(420).json({ erro: error.message });
    }
};
export{
    validate
}