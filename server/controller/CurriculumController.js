const findAll = async (req,res) =>{
    try {
        const result = await req.context.models.curriculum.findAll()
        return res.status(200).json(result)
    } catch (error) {
        return res.status(404).send('Data not found')
    }
}



export default {
    findAll
}