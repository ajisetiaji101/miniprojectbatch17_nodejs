const findAll = async(req,res) =>{
    try {
        const result = await req.context.models.curriculum_materi.findAll()
        return res.send(result)
    } catch (error) {
        return res.status(404).send('no data found')
    }
}

const create = async (req,res) =>{
    try {
        const jobs = await req.context.models.curriculum_materi.create({
            cuma_section : req.body.cuma_section,
            cuma_subsection : req.body.cuma_subsection,
            cuma_attachment : req.body.cuma_attachment,
            cuma_attachment_type : req.body.cuma_attachment_type,
            cuma_duration : req.body.cuma_duration,
            cuma_curr_id : req.body.cuma_curr_id,
            cuma_cuma_id : req.body.cuma_cuma_id

        })
        return res.send(jobs)
    } catch (error) {
        return res.status(404).send("not found")
    }
}

// const createCuma = async(req,res)=>{
//     const {files,fields} = req.fileAttrb
//     try {
//         const result = await req.context.models.curriculum_materi.create({
//             cuma_section : fields[0].value,
//             cuma_duration : fields[1].value,
//             cuma_curr_id: parseInt(fields[2].value)
//         })
//         return res.send(result)
//     } catch (error) {
//         return res.status(404).json({
//             status : "failed",
//             message : "",
//             error:error
//         })
//     }
// }

// const createCumacuma = async(req,res)=>{
//     const {files,fields} = req.fileAttrb
//     try {
//         const result = await req.context.models.curriculum_materi.create({
//             cuma_section : fields[0].value,
//             cuma_duration : fields[1].value,
//             cuma_curr_id: parseInt(fields[2].value),
//             cuma_cuma_id: parseInt(fields[3].value)

//         })
//         return res.send(result)
//     } catch (error) {
//         return res.status(404).json({
//             status : "failed",
//             message : "",
//             error:error
//         })
//     }
// }

// const createCumaSub = async(req,res)=>{
//     const {files,fields} = req.fileAttrb
//     try {
//         const result = await req.context.models.curriculum_materi.create({
//             cuma_section : fields[0].value,
//             cuma_duration : fields[1].value,
//             cuma_curr_id: parseInt(fields[2].value),
//             cuma_subsection: fields[3].value

//         })
//         return res.send(result)
//     } catch (error) {
//         return res.status(404).json({
//             status : "failed",
//             message : "",
//             error:error
//         })
//     }
// }

// const updateCuma = async (req,res,next) =>{
//     const {files,fields} = req.fileAttrb
//     try {
//         const result = await req.context.models.curriculum_materi.update({
//             cuma_section : fields[0].value,
//             cuma_subsection : fields[1].value,
//             cuma_duration : fields[2].value,
//             cuma_curr_id: parseInt(fields[3].value)
//         },
//         {returning : true, where : {cuma_id : req.params.id}})
//         return res.send(result)
//     } catch (error) {
//         return res.status(404).json({
//             status : "failed",
//             message : "",
//             error:error
//         })
//     }
// }

const remove = async (req,res)=>{
    try {
        const curriculumMateri = await req.context.models.curriculum_materi.destroy({
            where :  {cuma_id : req.params.id}
        })
        return res.send("delete"+curriculumMateri+"rows")
    } catch (error) {
        return res.status(404).send("not found")
    }
}

export default {
    findAll,
    create,
    // createCuma,
    // createCumacuma,
    // createCumaSub,
    // updateCuma,
    remove
}