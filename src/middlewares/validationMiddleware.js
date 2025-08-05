
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