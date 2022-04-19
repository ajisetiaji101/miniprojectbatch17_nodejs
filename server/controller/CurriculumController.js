const findAll = async (req,res) =>{
    try {
        const result = await req.context.models.curriculum.findAll({
            include: [
                {
                    model: await req.context.models.instructor,
                    as: "curr_inst",
                    include: [
                        {
                            model: await req.context.models.batch,
                            as: "batches",
                            include: [
                                {
                                    model: await req.context.models.talent_batch,
                                    as: "talent_batches",
                                    include: [
                                        {
                                            model: await req.context.models.talent,
                                            as: "taba_tale"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        })
        return res.json(200).send(result)
    } catch (error) {
        return res.status(404).send('no data found')
    }
}


export default {
    findAll
    
}