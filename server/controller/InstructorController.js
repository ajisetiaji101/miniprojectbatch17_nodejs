const findAll = async(req,res) =>{
    try {
        const result = await req.context.models.instructor.findAll()
        return res.send(result)
    } catch (error) {
        return res.status(404).send('no data found')
    }
}

const findOne  = async (req,res) => {
    try {
        const result = await req.context.models.instructor.findOne({
            where:{inst_id:req.params.id}
        })
        return res.send(result)
    } catch (error) {
        return res.status(404).send("not found")
    }
}

export default {
    findAll,
    findOne
}