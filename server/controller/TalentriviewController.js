const findAll = async(req,res)=>{
  try {
    const talent = await req.context.models.talent.findAll({
      include : [{
        all : true
      }]
    })
    return res.status(201).json({talent})
  } catch (error){
    return res.status(404).send("not found")
  }
}

export default {
  findAll
}
