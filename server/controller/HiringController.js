const findAll = async(req,res) =>{
  try {
      const result = await req.context.models.jobs.findAll()
      
      return res.send(result)
  } catch (error) {
      return res.status(404).send('no data found')
  }
}

export default {
  findAll
}