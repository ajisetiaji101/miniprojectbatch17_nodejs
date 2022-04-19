const findAll = async(req,res)=>{
  try {
    const batch = await req.context.models.talent_batch.findAll({
      include : [
        {
          model : req.context.models.batch,
          as: "taba_batch",
          include : [
            {
              model : req.context.models.instructor,
              as : "batch_inst"
            },
          ],
        },
        {
          model : req.context.models.talent,
          as : "taba_tale"
        },
    ]
    })
    return res.status(201).json({ batch })
  } catch (error){
    return res.status(404).send("not found")
  }
}

export default {
  findAll
}
