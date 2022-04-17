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

export default {
    findAll
}