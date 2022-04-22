const Bootcamp = async (req,res) =>{
    try {
        const result  = await req.context.models.curriculum.findAll();
        return res.status(201).json({result})
    } catch (error) {
        return res.status(404).send("no data found")       
    }
}

const Regular = async (req,res) =>{
    try {
        const result  = await req.context.models.curriculum.findAll({
            where: {curr_type_payment : req.params.curr_type_payment="Regular"}
        });
        return res.status(201).json({result})
    } catch (error) {
        return res.status(404).send("no data found")       
    }
}

const Berbayar = async (req,res) =>{
    try {
        const result  = await req.context.models.curriculum.findAll({
            where: {curr_type_payment : req.params.curr_type_payment="Berbayar"}
        });
        return res.status(201).json({result})
    } catch (error) {
        return res.status(404).send("no data found")       
    }
}
export default {
    Bootcamp,
    Regular,
    Berbayar
}