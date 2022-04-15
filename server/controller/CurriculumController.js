const findAll = async (req,res) =>{
    try {
        const result = await req.context.models.curriculum.findAll()
        return res.status(200).json(result)
    } catch (error) {
        return res.status(404).send('Data not found')
    }
}

const createCurr = async (req,res) =>{
    try {
        const result = await req.context.models.curriculum.create({
            curr_id : req.body.curr_id,
            curr_name : req.body.curr_name,
            curr_title : req.body.curr_title,
            curr_description : req.body.curr_description,
            curr_duration : req.body.curr_duration,
            curr_total_talents : req.body.curr_total_talents,
            curr_total_batch : req.body.curr_total_batch,
            curr_type : req.body.curr_type,
            curr_tag : req.body.curr_tag,
            curr_inst_id : req.body.curr_inst_id
        })
        return res.status(200).json(result)
    } catch (error) {
        return res.status(404).send("Not found")
    }
}

const updateCurr = async (req,res) =>{
    const {curr_name} = req.body
    try {
        const result = await req.context.models.curriculum.update(
            {curr_name : curr_name},
            {returning : true, where : {curr_id : req.params.id}}
        )
        return res.status(200).json(result)
    } catch (error) {
        return res.status(404).send("Not found")
    }
}

const removeCurr = async (req,res) =>{
    try {
        const result = await req.context.models.curriculum.destroy({
            where : {curr_id : req.params.id}
        })
        return res.send("Delete" +curriculum+ "rows")
    } catch (error) {
        return res.status(404).send("Not found")
    }
}

export default {
    findAll,
    createCurr,
    updateCurr,
    removeCurr
}