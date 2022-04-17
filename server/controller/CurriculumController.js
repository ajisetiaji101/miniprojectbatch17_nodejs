const findAll = async (req,res) =>{
    try {
        const result = await req.context.models.curriculum.findAll()
        return res.json(200).send(result)
    } catch (error) {
        return res.status(404).send('no data found')
    }
}

const createCurr = async(req,res)=>{
    const {files,fields} = req.fileAttrb
    try {
        const result = await req.context.models.curriculum.create({
            curr_id : fields[0].value,
            curr_name : fields[1].value,
            curr_title : fields[2].value,
            curr_headline : fields[3].value,
            curr_description : fields[4].value,
            curr_duration : fields[5].value,
            curr_learning_type : fields[6].value,
            curr_type_payment : fields[7].value,
            curr_price : fields[8].value,
            curr_category : fields[9].value,
            curr_language : fields[10].value,
            curr_min_score : fields[11].value,
            curr_tag_skill : fields[12].value,
            curr_roadmap_materi : parseInt(fields[13].value),
            curr_total_talents : parseInt(fields[14].value),
            curr_total_batch : parseInt(fields[15].value),
            curr_rating : parseInt(fields[16].value),
            curr_createdon : new Date(),
            curr_lastupdate :new Date(),
            curr_logo : files[0].file.newFilename,
            curr_user_id : parseInt(fields[17].value),
            curr_inst_id : parseInt(fields[18].value)
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


export default {
    findAll,
    createCurr
    
}