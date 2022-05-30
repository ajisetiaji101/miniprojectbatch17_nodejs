import { sequelize } from "../models/init-models";

const candidat = async (req,res) =>{
    try {
        const can  = await req.context.models.talent.findAll({
            attributes: [[sequelize.fn("count",sequelize.col("tale_id")),"jumlah_kandidat"]]
            
        });
        return res.send(can)
    } catch (error) {
        return res.status(404).send("not found")       
    }
}
//localhost:3001/codeid/api/talent/candidat

const training = async (req,res) =>{
    try {
        const ot = await req.context.models.talent.findAll({
            attributes : [[sequelize.fn("count",sequelize.col("tale_id")),"jumlah_trial"]],
            where:{tale_status_timeline : 'trial'}
        });
        return res.send(ot)
    } catch (error) {
        return res.status(404).send("not found")  
    }
}
//localhost:3001/codeid/api/talent/training

const boarding = async (req,res) =>{
    try {
        const bo = await req.context.models.talent.findAll({
            attributes : [[sequelize.fn("count",sequelize.col("tale_id")),"jumlah_boarding"]],
            where:{tale_status_timeline : 'filtering'}
        });
        return res.send(bo)
    } catch (error) {
        return res.status(404).send("not found")  
    }
}
//localhost:3001/codeid/api/talent/boarding

const idle = async (req,res) =>{
    try {
        const idl = await req.context.models.talent.findAll({
            attributes : [[sequelize.fn("count",sequelize.col("tale_id")),"jumlah_idle"]],
            where:{tale_status_timeline : 'idle'}
        });
        return res.send(idl)
    } catch (error) {
        return res.status(404).send("not found")  
    }
}
//localhost:3001/codeid/api/talent/idle


const month = async (req,res)=>{
    const result = await sequelize.query(
        `
        select to_char(tati_date,'Month') as name, count(tati_id)
        from talent_timeline
        group by to_char(tati_date,'Month')
        `,
        {
          type: sequelize.QueryTypes.SELECT,
        }
      );
      return res.send(result);
    // await sequelize.query('SELECT extract(month from tale_timeline_date), count(extract(month from tale_timeline_date)) from talent where tale_status= ? group by extract(month from tale_timeline_date)',
    //     {replacements:['Candidate'],type : sequelize.QueryTypes.SELECT}
    // ).then(result =>{
    //         return res.send(result)
    // })
}
//localhost:3001/codeid/api/talent/month

const bootcamp = async (req,res) =>{
    try {
        const result = await sequelize.query(
            "select tale_bootcamp as name, count(*) from talent group by tale_bootcamp",
            {
              type: sequelize.QueryTypes.SELECT,
            }
          );
          return res.send(result);
    } catch (error) {
        return res.status(404).send("not found")       
    }
}
//localhost:3001/codeid/api/talent/bootcamp

const versus = async (req,res)=>{
    const result = await sequelize.query(
        `
        select tale_status_timeline as name, cast(count(tale_id) as int) 
        from talent where tale_status_timeline = 'idle' or tale_status_timeline = 'placement'
        group by tale_status_timeline
        `,
        {
          type: sequelize.QueryTypes.SELECT,
        }
      );
      return res.send(result);
}

//localhost:3001/codeid/api/talent/versus

const pendidikan = async (req,res) =>{
    try {
        const result = await sequelize.query(
            "select tale_education as name, cast(count(*) as int) from talent group by tale_education",
            {
              type: sequelize.QueryTypes.SELECT,
            }
          );
          return res.send(result);
    } catch (error) {
        return res.status(404).send("not found")       
    }
}
//localhost:3001/codeid/api/talent/pendidikan

const universitas = async (req,res) =>{
    try {
        const result = await sequelize.query(
        "select tale_school_name as name, cast(count(*) as int) from talent group by tale_school_name",
    {
      type: sequelize.QueryTypes.SELECT,
    }
  );
  return res.send(result);
    } catch (error) {
        return res.status(404).send("not found")       
    }
}
//localhost:3001/codeid/api/talent/universitas

const jurusan = async (req,res) =>{
    try {
        const result = await sequelize.query(
            "select tale_major as name, cast(count(*) as int) from talent group by tale_major",
            {
              type: sequelize.QueryTypes.SELECT,
            }
          );
          return res.send(result);
    } catch (error) {
        return res.status(404).send("not found")       
    }
}
//localhost:3001/codeid/api/talent/jurusan


export default{
    candidat,
    training,
    boarding,
    idle,
    month,
    bootcamp,
    versus,
    pendidikan,
    universitas,
    jurusan
}