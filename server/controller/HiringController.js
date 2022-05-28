const findAll = async(req,res) =>{
  try {
      const result = await req.context.models.jobs.findAll()
      
      return res.send(result)
  } catch (error) {
      return res.status(404).send('no data found')
  }
}

const findOne = async(req,res) =>{
  try {
      const result = await req.context.models.jobs.findOne({
        where: { jobs_id : req.params.id }
      })
      
      return res.send(result)
  } catch (error) {
      return res.status(404).send('no data found')
  }
}

export default {
  findAll,
  findOne
}