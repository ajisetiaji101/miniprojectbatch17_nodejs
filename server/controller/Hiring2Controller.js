const findOne = async(req,res) =>{
    try {
        const result = await req.context.models.jobs.findAll({
          where: { jobs_city : req.params.id }
        })
        
        return res.send(result)
    } catch (error) {
        return res.status(404).send('no data found')
    }
  }

  export default {
    findOne
  }