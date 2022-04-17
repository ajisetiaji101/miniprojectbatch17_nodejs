const findAll = async (req, res) => {
  try {
    const result = await req.context.models.talent.findAll();
    return res.status(201).json({ result });
  } catch (error) {
    return res.status(404).send("no data found");
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
};
