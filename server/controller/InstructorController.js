const findAll = async(req,res) =>{
    try {
        const result = await req.context.models.instructor.findAll()
        return res.send(result)
    } catch (error) {
        return res.status(404).send('no data found')
    }
}

const createInst = async(req,res)=>{
    const {files,fields} = req.fileAttrb
    try {
        const result = await req.context.models.instructor.create({
            inst_name : fields[0].value,
            inst_bootcamp : fields[1].value,
            inst_about : fields[2].value,
            inst_linkedin : fields[3].value,
            inst_twitter : fields[4].value,
            inst_blog : fields[5].value,
            inst_youtube : fields[6].value,
            inst_photo : files[0].file.newFilename
        })
        return res.send(result)
    } catch (error) {
        return res.status(404).json({
            status : "failed",
            message : "",
            error:error
        })
    }
}

const updateInst = async (req,res,next) =>{
    const {files,fields} = req.fileAttrb
    try {
        const result = await req.context.models.instructor.update({
            inst_photo : files[0].file.newFilename
        },
        {returning : true, where : {inst_id : req.params.id}})
        return res.send(result)
    } catch (error) {
        return res.status(404).json({
            status : "failed",
            message : "",
            error:error
        })
    }
}

const remove = async (req,res)=>{
    try {
        const instructors = await req.context.models.instructor.destroy({
            where :  {inst_id : req.params.id}
        })
        return res.send("delete"+instructors+"rows")
    } catch (error) {
        return res.status(404).send("not found")
    }
}


export default {
    findAll,
    createInst,
    updateInst,
    remove
}