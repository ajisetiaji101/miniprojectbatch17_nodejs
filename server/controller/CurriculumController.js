const findAll = async (req, res) => {
  try {
    const result = await req.context.models.curriculum.findAll({
      attributes: [
        "curr_id",
        "curr_name",
        "curr_title",
        "curr_duration",
        "curr_total_talents",
        "curr_total_batch",
        "curr_learning_type",
        "curr_rating",
      ],
      include: [
        {
          model: req.context.models.instructor,
          as: "curr_inst",
          attributes: ["inst_name"],
          include: [
            {
              model: req.context.models.batch,
              as: "batches",
              attributes: ["batch_name", "batch_type"],
              include: [
                {
                  model: req.context.models.talent_batch,
                  as: "talent_batches",
                  attributes: ["taba_tale_id"],
                  include: [
                    {
                      model: req.context.models.talent,
                      as: "taba_tale",
                      attributes: ["tale_fullname"],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

const createCurr = async (req, res, next) => {
  const { 
    curr_name,
    curr_title,
    curr_headline,
    curr_description,
    curr_duration,
    curr_learning_type,
    curr_type_payment,
    curr_price,
    curr_category,
    curr_language,
    curr_min_score,
    curr_tag_skill,
    curr_createdon,
    curr_lastupdate,
    curr_logo,
    curr_inst_id
   } = req.body;
  try {
    const result = await req.context.models.curriculum.create({
      curr_name: curr_name,
      curr_title: curr_title, 
      curr_headline: curr_headline,
      curr_description: curr_description,
      curr_duration: curr_duration,
      curr_learning_type: curr_learning_type,
      curr_type_payment: curr_type_payment,
      curr_price: parseInt(curr_price),
      curr_category: curr_category,
      curr_language: curr_language,
      curr_min_score: curr_min_score,
      curr_tag_skill: curr_tag_skill,
      curr_createdon: new Date(curr_createdon),
      curr_lastupdate: new Date(curr_lastupdate),
      curr_logo: curr_logo,
      curr_inst_id: parseInt(curr_inst_id),
    });
    req.curr_id = result.dataValues;
    next();
    return res.send("success");
  } catch (error) {
    return res.send("error")
  }
};

const findOne = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await req.context.models.curriculum.findOne({
      where: { curr_id: id },
      include: [
        {
          model: req.context.models.instructor,
          as: "curr_inst",
        },
        {
          model: req.context.models.curriculum_materi,
          as: "curriculum_materis",
        },
      ],
    });

    return res.json(result);
  } catch (error) {
    return next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { files, fields } = req.fileAttrb;
    const updateObj = {};

    for (const field of fields) {
      const { fieldName, value } = field;
      updateObj[fieldName] = value === "null" ? null : value;
    }

    for (const file of files) {
      const {
        fieldName,
        file: { newFilename },
      } = file;
      updateObj[fieldName] = newFilename;
    }

    updateObj.curr_createdon = updateObj.curr_createdon || new Date();
    updateObj.curr_lastupdate = new Date();

    const result = await req.context.models.curriculum.update(updateObj, {
      where: { curr_id: id },
      returning: true,
    });

    return res.json(result);
  } catch (error) {
    return next(error);
  }
};

export default {
  findAll,
  createCurr,
  findOne,
  update,
};
