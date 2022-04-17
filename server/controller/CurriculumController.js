const findAll = async (req,res) =>{
    try {
        const result = await req.context.models.curriculum.findAll()
        return res.json(200).send(result)
    } catch (error) {
        return res.status(404).send('no data found')
    }
}




export default {
    findAll
}