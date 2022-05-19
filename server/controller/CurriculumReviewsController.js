const findAll = async(req,res) =>{
    try {
        const result = await req.context.models.curriculum_reviews.findAll({
            include : [{
                all: true
            }]
        })
        
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


const updateCure = async (req,res) =>{
    const {files,fields} = req.fileAttrb
    try {
        const result = await req.context.models.curriculum_reviews.update({
            cure_photo : files[0].file.newFilename
        },
        {returning : true, where : {cure_id : req.params.id}})
        return res.send(result)
    } catch (error) {
        return res.status(404).json({
            status : "failed",
            message : "",
            error:error
        })
    }
}



export default{
    findAll,
    findOne,
    updateCure
}