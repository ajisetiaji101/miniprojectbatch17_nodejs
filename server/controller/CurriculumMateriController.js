const findAll = async (req, res) => {
  try {
    const result = await req.context.models.curriculum_materi.findAll();
    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

const findOne = async (req, res) => {
  try {
    const result = await req.context.models.curriculum_materi.findOne({
      where: { cuma_id: req.params.id },
    });
    return res.send(result);
  } catch (error) {
    return res.status(404).send("not found");
  }
};

const create = async (req, res, next) => {
  try {
    const { files, fields } = req.fileAttrb;
    const createObj = {};

    for (const field of fields) {
      const { fieldName, value } = field;
      createObj[fieldName] = value;
    }

    for (const file of files) {
      const {
        fieldName,
        file: { newFilename },
      } = file;
      createObj[fieldName] = newFilename;
    }

    const result = await req.context.models.curriculum_materi.create(createObj);

    return res.json(result);
  } catch (error) {
    return next(error);
  }
};

export default {
  findAll,
  findOne,
  create,
};
