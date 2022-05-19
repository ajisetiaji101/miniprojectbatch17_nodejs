const findAll = async (req, res) => {
  try {
    const result = await req.context.models.talent.findAll({
      include: [
        {
          model: await req.context.models.talent_batch,
          as: "talent_batches",
          include: [
            {
              model: await req.context.models.batch,
              as: "taba_batch",
              include: [
                {
                  model: await req.context.models.instructor,
                  as: "batch_inst",
                },
              ],
            },
          ],
        },
        {
          model: req.context.models.talent_placement,
          as: "talent_placements",
          include: [
            {
              model: req.context.models.placement,
              as: "tapl_place",
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

const findOne = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await req.context.models.talent.findOne({
      where: { tale_id: id },
      include: [
        {
          model: await req.context.models.talent_batch,
          as: "talent_batches",
          include: [
            {
              model: await req.context.models.batch,
              as: "taba_batch",
              include: [
                {
                  model: await req.context.models.instructor,
                  as: "batch_inst",
                },
              ],
            },
          ],
        },
        {
          model: req.context.models.talent_placement,
          as: "talent_placements",
          include: [
            {
              model: req.context.models.placement,
              as: "tapl_place",
            },
          ],
        },
      ],
    });

    return res.json(result);
  } catch (error) {
    return next(error);
  }
};

const createEmp = async (req, res) => {
  const { files, fields } = req.fileAttrb;
  console.log();
  try {
    const result = await req.context.models.talent.create({
      tale_fullname: fields[0].value,
      tale_birthdate: new Date(),
      tale_education: fields[1].value,
      tale_school_name: fields[2].value,
      tale_major: fields[3].value,
      tale_handphone: fields[4].value,
      tale_status: fields[5].value,
      tale_resume: files[0].file.newFilename,
      tale_photo: files[1].file.newFilename,
    });
    return res.status(201).json(result);
  } catch (error) {
    return res.status(404).json({
      status: "failed",
      message: "",
      error: error.message,
    });
  }
};

const detail = async (req, res) => {
  try {
    const result = await req.context.models.talent.findAll({
      include: [
        {
          all: true,
          include: [
            {
              all: true,
            },
          ],
        },
      ],
    });
    return res.status(201).json({ result });
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

export default {
  findAll,
  createEmp,
  detail,
  findOne,
};
