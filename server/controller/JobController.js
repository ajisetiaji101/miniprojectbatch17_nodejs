const create = async (req,res)=>{
    try {
        const jobs= await req.context.models.jobs.create({
            jobs_post_no :req.body.jobs_post_no,
            jobs_title :req.body.jobs_title,
            jobs_start_date : req.body.jobs_start_date,
            jobs_end_date : req.body.jobs_end_date,
            jobs_upto_salary : req.body.jobs_upto_salary,
            job_upto_experience : req.body.job_upto_experience,
            jobs_description : req.body.jobs_description,
            jobs_primary_skill :req.body.jobs_primary_skill,
            jobs_secondary_skill :req.body.jobs_secondary_skill,
            jobs_industry_type : req.body.jobs_industry_type,
            jobs_working_type : req.body.jobs_working_type,
            jobs_publish : req.body.jobs_publish,
            jobs_remotely : req.body.jobs_remotely,
            jobs_spec_education : req.body.jobs_spec_education,
            jobs_benefit : req.body.jobs_benefit,
            jobs_specification : req.body.jobs_specification,
            jobs_status : req.body.jobs_status,
            jobs_location : req.body.jobs_location,
            jobs_city : req.body.jobs_city,
            jobs_user_id : req.body.jobs_user_id,
			jobs_client_id : req.body.jobs_client_id
        })
        return res.status(200).json({ jobs });
    } catch (error) {
        return res.Status(404).json({ msg: "N0 DATA FOUND" });
    }
}

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
                "jobs_publish"
            ],
            
        });
        return res.status(200).json({ jobs });
    } catch (error) {
        return res.Status(404).json({ msg: "N0 DATA FOUND" });
    }
};


export default{
    create,
    list,
}