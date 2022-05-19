import { json } from "body-parser"

const findAll = async(req,res) =>{
  try {
      const result = await req.context.models.jobs.findAll()
      re
      return json.send(result)
  } catch (error) {
      return res.status(404).send('no data found')
  }
}

export default {
  findAll
}