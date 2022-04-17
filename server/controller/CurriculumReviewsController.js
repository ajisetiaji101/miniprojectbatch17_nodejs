const findAll = async(req,res) =>{
    try {
        const result = await req.context.models.curriculum_reviews.findAll()
        return res.send(result)
    } catch (error) {
        return res.status(404).send('no data found')
    }
}

const create = async (req,res) =>{
    try {
        const jobs = await req.context.models.curriculum_reviews.create({
            cure_review : req.body.cure_review,
            cure_rating : req.body.cure_rating,
            cure_curr_id : req.body.cure_curr_id,
            curr_user_id : req.body.curr_user_id

        })
        return res.send(create)
    } catch (error) {
        return res.status(404).send("not found")
    }
}

const update = async (req,res) =>{
    const {cure_review} = req.body
    const {cure_rating} = req.body
    try {
        const jobs = await req.context.models.curriculum_reviews.update(
            {cure_review : cure_review},
            {cure_rating : cure_rating},
            {returning : true, where :{cure_id : req.params.id}}
        )
        return res.send(update)
    } catch (error) {
        return res.status(404).send("not found")
    }
}

const remove = async (req,res)=>{
    try {
        const curriculumReviews = await req.context.models.curriculum_reviews.destroy({
            where :  {cure_id : req.params.id}
        })
        return res.send("delete"+curriculumReviews+"rows")
    } catch (error) {
        return res.status(404).send("not found")
    }
}

export default{
    findAll,
    create,
    update,
    remove
}