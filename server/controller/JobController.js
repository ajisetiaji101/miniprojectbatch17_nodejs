import { sequelize } from "../models/init-models";

const create = async (req, res) => {
  const { files, fields } = req.fileAttrb;

  try {
    const jobs = await req.context.models.jobs.create({
      // jobs_post_no: fields[0].value,
      jobs_title: fields[0].value,
      jobs_start_date: fields[1].value,
      jobs_end_date: fields[2].value,
      jobs_upto_salary: parseInt(fields[3].value),
      job_upto_experience: parseInt(fields[4].value),
      jobs_description: fields[5].value,
      jobs_primary_skill: fields[6].value,
      jobs_secondary_skill: fields[7].value,
      jobs_industry_type: fields[8].value,
      jobs_working_type: fields[9].value,
      jobs_publish: fields[10].value,
      jobs_remotely: fields[11].value,
      jobs_spec_education: fields[12].value,
      jobs_benefit: fields[13].value,
      jobs_specification: fields[14].value,
      jobs_status: fields[15].value,
      jobs_location: fields[16].value,
      jobs_city: fields[17].value,
      jobs_user_id: parseInt(fields[18].value),
      jobs_client_id: parseInt(fields[19].value),
      jobs_photo: files[0].file.newFilename,

    });
    return res.send(jobs)
  } catch (error) {
    res.status(404).json({message : error.message})
  }
};

const list = async (req, res) => {
  try {
    const jobs  = await req.context.models.jobs.findAll({
      include : [{
          all : true
      }]
  });
    return res.send(jobs)
  } catch (error) {
    res.status(404).json({message : error.message})
  }
};

const update = async (req, res) => {
  const {
    jobs_post_no,
    jobs_title,
    jobs_start_date,
    jobs_end_time,
    jobs_upto_salary,
    jobs_description,
    jobs_primary_skill,
    jobs_secondary_skill,
    jobs_industry_type,
    jobs_working_type,
    jobs_publish,
    jobs_remotely,
    jobs_spec_education,
    jobs_benefit,
    jobs_specification,
    jobs_status,
    jobs_location,
    jobs_city,
    jobs_user_id,
    jobs_client_id,
  } = req.body;
  try {
    const jobs = await req.constext.models.jobs.update(
      {
        jobs_post_no: jobs_post_no,
        jobs_title: jobs_title,
        jobs_start_date: jobs_start_date,
        jobs_end_time: jobs_end_time,
        jobs_upto_salary: jobs_upto_salary,
        jobs_description: jobs_description,
        jobs_primary_skill: jobs_primary_skill,
        jobs_secondary_skill: jobs_secondary_skill,
        jobs_industry_type: jobs_industry_type,
        jobs_working_type: jobs_working_type,
        jobs_publish: jobs_publish,
        jobs_remotely: jobs_remotely,
        jobs_spec_education: jobs_spec_education,
        jobs_benefit: jobs_benefit,
        jobs_specification: jobs_specification,
        jobs_status: jobs_status,
        jobs_location: jobs_location,
        jobs_city: jobs_city,
        jobs_user_id: jobs_user_id,
        jobs_client_id: jobs_client_id,
      },
      { returning: true, where: { jobs_id: req.params.id } }
    );
    return res.send(jobs);
  } catch (error) {
    return res.send(404).res.send("404 Not found");
  }
};

export default {
  create,
  list,
  update,
};
