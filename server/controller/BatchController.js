const findAll = async(req,res)=>{
  try {
    const batch = await req.context.models.batch.findAll({
      include : [{
        all : true
      }]
    })
    return res.send(batch)
  } catch (error){
    return res.status(404).send("not found")
  }
}

export default {
  findAll
}