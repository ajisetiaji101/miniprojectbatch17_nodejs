import { sequelize } from "../models/init-models";

const findAll = async (req,res) => {
    try {
        const jobs = await req.context.models.jobs.findAll({
            include: [
                {
                    all:true
                }
            ]
        })
        return res.send(jobs)
    } catch (error) {
        return res.status(404).send("404 Not Found")
    }
}

const update = async (req,res) => {
    const {jobs_id, jobs_post_no, jobs_title, jobs_start_date, jobs_end_time, jobs_upto_salary,jobs_description, jobs_primary_skill,jobs_secondary_skill, jobs_industry_type,jobs_working_type,jobs_publish,jobs_remotely, jobs_spec_education,jobs_benefit, jobs_specification, jobs_status, jobs_location, jobs_city, jobs_user_id, jobs_client_id} = req.body
    try {
        const jobs = await req.constext.models.jobs.update(
            {jobs_id: jobs_id, jobs_post_no:jobs_post_no, jobs_title:jobs_title, jobs_start_date:jobs_start_date, jobs_end_time:jobs_end_time, jobs_upto_salary:jobs_upto_salary,jobs_description:jobs_description, jobs_primary_skill:jobs_primary_skill,jobs_secondary_skill:jobs_secondary_skill, jobs_industry_type:jobs_industry_type,jobs_working_type:jobs_working_type,jobs_publish:jobs_publish,jobs_remotely:jobs_remotely, jobs_spec_education:jobs_spec_education,jobs_benefit:jobs_benefit, jobs_specification:jobs_specification, jobs_status:jobs_status, jobs_location:jobs_location, jobs_city:jobs_city, jobs_user_id:jobs_user_id, jobs_client_id:jobs_client_id},
            {returning:true, where : {jobs_id : req.params.id}}
        )
        return res.send(jobs)
    } catch (error) {
        return res.send(404).res.send("404 Not found")
    }
}

export default {
    findAll,
    update
}