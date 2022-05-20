const createProcessBootamp = async (req, res) => {
  const { files, fields } = req.fileAttrb;
  try {
    const result = await req.context.models.talent.create({
      tale_fullname: fields[0].value,
      tale_birthdate: fields[1].value,
      tale_major: fields[2].value,
      tale_school_name: fields[3].value,
      tale_education: fields[4].value,
      tale_handphone: fields[5].value,
      tale_bootcamp: fields[6].value,
      tale_motivation: fields[7].value,
      tale_user_id: fields[8].value,
      tale_photo: files[0].file.newFilename,
      tale_resume: files[1].file.newFilename,
    });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const updateProcessBootamp = async (req, res) => {
  const { files, fields } = req.fileAttrb;

  if (files[0].fieldName === "tale_resume" && files[1].fieldName === "photo") {
    try {
      const result = await req.context.models.talent.update(
        {
          tale_fullname: fields[0].value,
          tale_birthdate: fields[1].value,
          tale_major: fields[2].value,
          tale_school_name: fields[3].value,
          tale_education: fields[4].value,
          tale_handphone: fields[5].value,
          tale_bootcamp: fields[6].value,
          tale_motivation: fields[7].value,
          tale_resume: files[0].file.newFilename,
          tale_photo: files[1].file.newFilename,
        },
        { returning: true, where: { tale_user_id: parseInt(req.params.id) } }
      );
      return res.send(result);
    } catch (error) {
      console.log(error);
    }
  } else if (files[0].fieldName === "tale_resume") {
    try {
      const result = await req.context.models.talent.update(
        {
          tale_fullname: fields[0].value,
          tale_birthdate: fields[1].value,
          tale_major: fields[2].value,
          tale_school_name: fields[3].value,
          tale_education: fields[4].value,
          tale_handphone: fields[5].value,
          tale_bootcamp: fields[6].value,
          tale_motivation: fields[7].value,
          tale_resume: files[0].file.newFilename,
        },
        { returning: true, where: { tale_user_id: parseInt(req.params.id) } }
      );
      return res.send(result);
    } catch (error) {
      console.log(error);
    }
  } else if (files[0].fieldName === "tale_photo") {
    try {
      const result = await req.context.models.talent.update(
        {
          tale_fullname: fields[0].value,
          tale_birthdate: fields[1].value,
          tale_major: fields[2].value,
          tale_school_name: fields[3].value,
          tale_education: fields[4].value,
          tale_handphone: fields[5].value,
          tale_bootcamp: fields[6].value,
          tale_motivation: fields[7].value,
          tale_photo: files[0].file.newFilename,
        },
        { returning: true, where: { tale_user_id: parseInt(req.params.id) } }
      );
      return res.send(result);
    } catch (error) {
      console.log(error);
    }
  }
};

const updateProcessBootampNoFile = async (req, res) => {
  const { tale_fullname, tale_birthdate, tale_education, tale_major, tale_school_name, tale_handphone, tale_bootcamp, tale_motivation, tale__user_id } = req.body;
  console.log(req.body);
  const result = await req.context.models.talent.update(
    {
      tale_fullname,
      tale_birthdate,
      tale_major,
      tale_school_name,
      tale_education,
      tale_handphone,
      tale_bootcamp,
      tale_motivation,
    },
    {
      returning: true,
      where: { tale_user_id: req.params.id },
    }
  );
  return res.send(result);
};

export default {
  createProcessBootamp,
  updateProcessBootamp,
  updateProcessBootampNoFile,
};
