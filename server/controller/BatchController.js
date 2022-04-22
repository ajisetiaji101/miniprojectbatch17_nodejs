const findBatch = async (req, res) => {
  try {
      const result = await req.context.models.batch.findAll({
          attributes: ['batch_id', 
                      'batch_name',
                      'batch_technology',
                      'batch_start_date',
                      'batch_end_date',
                      'batch_status'],
          include:[
              {
                  model: req.context.models.talent_batch,
                  as: 'talent_batches',
                  attributes: [
                      'taba_tale_id'
                  ],
                  where:{
                      taba_drop: false
                  },
                  required:false,
                  include:{
                      model: req.context.models.talent,
                      as: 'taba_tale',
                      attributes: [
                          'tale_photo'
                      ],
                      required:false
                  }
              },
              {
                  model: req.context.models.instructor,
                  as: 'batch_inst',
                  attributes: [
                      'inst_id',
                      'inst_name'
                  ],
                  required:false
              }
          ]
      });
      return res.send(result)
  } catch (error) {
      res.status(404).json({message : error.message})
  }
}

const findBatchById = async (req, res) => {
  try {
      const result = await req.context.models.batch.findAll({
          attributes: ['batch_id', 
                      'batch_name',
                      'batch_technology',
                      'batch_start_date',
                      'batch_end_date',
                      'batch_status'],
          where:{batch_id: req.params.id},
          include:[
              {
                  model: req.context.models.talent_batch,
                  as: 'talent_batches',
                  attributes: [
                      'taba_tale_id'
                  ],
                  where:{
                      taba_drop: false
                  },
                  required:false,
                  include:{
                      model: req.context.models.talent,
                      as: 'taba_tale',
                      attributes: [
                          'tale_photo'
                      ],
                      required:false
                  }
              },
              {
                  model: req.context.models.instructor,
                  as: 'batch_inst',
                  attributes: [
                      'inst_id',
                      'inst_name'
                  ],
                  required:false
              }
          ]
      });
      return res.send(result)
  } catch (error) {
      res.status(404).json({message : error.message})
  }
}

const UpdateBatchStatus = async (req, res) => {
  const { batch_status } = req.body;
  try{
      const result = await req.context.models.batch.update(
          { 
              batch_status: batch_status
          },
          {
              returning: true,
              where: { batch_id: req.params.id }
          }
      );
      return res.send(result);
  }catch (error) {
      res.status(404).json({message : error.message})
  }
}

const deleteBatch = async (req, res) => {
  const id = req.params.id;
  try {
      const result_taba = await req.context.models.talent_batch.destroy({
          where: { taba_batch_id: parseInt(id) }
      });
      const result = await req.context.models.batch.destroy({
          where: { batch_id: parseInt(id) }
      });
      return res.send("delete " + result + " rows.")
  } catch (error) {
      return res.sendStatus(404).send("Data not found.")
  }
}

const UpdateBatch = async (req, res, next) => {
  const {batch_name, batch_technology, batch_start_date, batch_end_date, batch_inst_id} = req.body;
  try{
      const result = await req.context.models.batch.update(
          { 
              batch_name: batch_name,
              batch_technology: batch_technology,
              batch_start_date: batch_start_date,
              batch_end_date: batch_end_date,
              batch_inst_id: batch_inst_id
          },
          {
              returning: true,
              where: { batch_id: parseInt(req.params.id) }
          }
      );
      next()
  }catch (error) {
      res.status(404).json({message : error.message})
  }
}

const AddMembers = async (req, res) => {
  const {talent_batches} = req.body;
  const batch = req.params.id
  try{
      const batchTabaList = await req.context.models.talent_batch.findAll({
          attributes: ['taba_tale_id'],
          where: {taba_batch_id: parseInt(batch)},
      }).map(el=>el.dataValues.taba_tale_id)

      await req.context.models.talent_batch.update(
          {
              taba_drop: true,
              taba_drop_date: new Date()
          },
          {
              returning: true,
              where: { 
                  taba_batch_id: parseInt(batch)
              }
          }
      )

      await talent_batches.map(el=>{
          if(batchTabaList.includes(el.tale_id)){
              req.context.models.talent_batch.update(
                  {
                      taba_drop: false,
                      taba_drop_date: null
                  },
                  {
                      returning: true,
                      where: { 
                          taba_batch_id: parseInt(batch),
                          taba_tale_id: parseInt(el.tale_id),
                      }
                  }
              )
          }else{
              req.context.models.talent_batch.create(
                  {
                      taba_drop: false,
                      taba_tale_id: el.tale_id,
                      taba_batch_id: parseInt(batch)
                  }
              )
          }
      })      
      return res.send("Update Batch Succeed");
  }catch (error) {
      res.status(404).json({message : error.message})
  }
}





export default{
  findBatch,
  findBatchById,
  UpdateBatchStatus,
  deleteBatch,
  UpdateBatch,
  AddMembers
}

