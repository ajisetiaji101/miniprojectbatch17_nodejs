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
    return res.send(jobs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const list = async (req, res) => {
  try {
    const jobs = await req.context.models.jobs.findAll({
      attributes: [
        "jobs_id",
        "jobs_title",
        "jobs_start_date",
        "jobs_end_date",
        "jobs_upto_salary",
        "job_upto_experience",
        "jobs_industry_type",
        "jobs_publish",
        "jobs_specification",
        "jobs_status",
      ],
      // where: { jobs_status: "open" },
    });
    return res.send(jobs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const findOne = async (req, res) => {
  try {
    const job = await req.context.models.jobs.findOne({
      where: { jobs_id: req.params.id },
    });
    return res.send(job);
    const jobs = await req.context.models.jobs.findAll({
      include: [
        {
          all: true,
        },
      ],
    });
    return res.send(jobs);
  } catch (error) {
    return res.status(404).send("404 Not Found");
  }
};

const update = async (req, res) => {
  const { fields } = req.fileAttrb;
  // const {
  //   jobs_post_no,
  //   jobs_title,
  //   jobs_start_date,
  //   jobs_end_time,
  //   jobs_upto_salary,
  //   jobs_description,
  //   jobs_primary_skill,
  //   jobs_secondary_skill,
  //   jobs_industry_type,
  //   jobs_working_type,
  //   jobs_publish,
  //   jobs_remotely,
  //   jobs_spec_education,
  //   jobs_benefit,
  //   jobs_specification,
  //   jobs_status,
  //   jobs_location,
  //   jobs_city,
  //   jobs_user_id,
  //   jobs_client_id,
  //   jobs_photo
  // } = req.body;
  try {
    const jobs = await req.context.models.jobs.update(
      {
        jobs_post_no: fields[0].value,
        jobs_title: fields[1].value,
        jobs_start_date: fields[2].value,
        jobs_end_time: fields[3].value,
        jobs_upto_salary: parseInt(fields[4].value),
        job_upto_experience: fields[5].value,
        jobs_description: fields[6].value,
        jobs_primary_skill: fields[7].value,
        jobs_secondary_skill: fields[8].value,
        jobs_industry_type: fields[9].value,
        jobs_working_type: fields[10].value,
        jobs_publish: fields[11].value,
        jobs_remotely: fields[12].value,
        jobs_spec_education: fields[13].value,
        jobs_benefit: fields[14].value,
        jobs_specification: fields[15].value,
        jobs_status: fields[16].value,
        jobs_location: fields[17].value,
        jobs_city: fields[18].value,
        jobs_user_id: parseInt(fields[19].value),
        jobs_client_id: parseInt(fields[20].value),
        // jobs_photo: jobs_photo
        // jobs_id: fields[21].value,
      },
      { returning: true, where: { jobs_id: parseInt(req.params.id) } }
    );
    return res.send(jobs);
  } catch (error) {
    return res.status(404).send("404 Not Found");
  }
};

export default {
  create,
  list,
  update,
  findOne,
};
