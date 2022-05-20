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

const createCurr = async (req, res) => {
  const { files, fields } = req.fileAttrb;
  try {
    const result = await req.context.models.curriculum.create({
      curr_id: fields[0].value,
      curr_name: fields[1].value,
      curr_title: fields[2].value,
      curr_headline: fields[3].value,
      curr_description: fields[4].value,
      curr_duration: fields[5].value,
      curr_learning_type: fields[6].value,
      curr_type_payment: fields[7].value,
      curr_price: fields[8].value,
      curr_category: fields[9].value,
      curr_language: fields[10].value,
      curr_min_score: fields[11].value,
      curr_tag_skill: fields[12].value,
      curr_roadmap_materi: parseInt(fields[13].value),
      curr_total_talents: parseInt(fields[14].value),
      curr_total_batch: parseInt(fields[15].value),
      curr_rating: parseInt(fields[16].value),
      curr_createdon: new Date(),
      curr_lastupdate: new Date(),
      curr_logo: files[0].file.newFilename,
      curr_user_id: parseInt(fields[17].value),
      curr_inst_id: parseInt(fields[18].value),
    });
    return res.send(result);
  } catch (error) {
    return res.status(404).json({
      status: "failed",
      message: "",
      error: error,
    });
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
