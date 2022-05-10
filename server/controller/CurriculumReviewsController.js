const findAll = async(req,res) =>{
    try {
        const result = await req.context.models.curriculum_reviews.findAll()
        return res.send(result)
    } catch (error) {
        return res.status(404).send('no data found')
    }
}

const findOne  = async (req,res) => {
    try {
        const result = await req.context.models.curriculum_reviews.findOne({
            where:{cure_id:req.params.id}
        })
        return res.send(result)
    } catch (error) {
        return res.status(404).send("not found")
    }
}

export default{
    findAll,
    findOne
}