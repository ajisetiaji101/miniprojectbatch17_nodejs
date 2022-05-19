import UploadDownloadHelper from "../helpers/UploadDownloadHelper";
import { sequelize } from "../models/init-models";

const getTalent = async (req, res, next) => {
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

const create = async (req, res) => {
  const {
    tale_fullname,
    tale_email,
    tale_education,
    tale_major,
    tale_city,
    tale_bootcamp,
    tale_birthdate,
    tale_handphone,
    tale_school_name,
    tale_year_graduate,
    tale_gpa,
    tale_province,
    tale_tag_skill,
    tale_address,
    tale_resume,
    tale_cover_letter,
    tale_photo,
  } = req.body;
  try {
    const result = await req.context.models.talent.create({
      tale_fullname,
      tale_email,
      tale_education,
      tale_major,
      tale_city,
      tale_bootcamp,
      tale_birthdate,
      tale_handphone,
      tale_school_name,
      tale_year_graduate,
      tale_gpa,
      tale_province,
      tale_tag_skill,
      tale_address,
      tale_resume,
      tale_cover_letter,
      tale_photo,
    });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const update = async (req, res) => {
  const {
    tale_fullname,
    tale_education,
    tale_major,
    tale_city,
    tale_bootcamp,
    tale_birthdate,
    tale_handphone,
    tale_school_name,
    tale_year_graduate,
    tale_gpa,
    tale_province,
    tale_tag_skill,
    tale_address,
    tale_resume,
    tale_cover_letter,
    tale_photo,
  } = req.body;
  try {
    const result = await req.context.models.talent.update(
      {
        tale_fullname,
        tale_email,
        tale_education,
        tale_major,
        tale_city,
        tale_bootcamp,
        tale_birthdate,
        tale_handphone,
        tale_school_name,
        tale_year_graduate,
        tale_gpa,
        tale_province,
        tale_tag_skill,
        tale_address,
        tale_resume,
        tale_cover_letter,
        tale_photo,
      },
      { returning: true, where: { tale_id: req.params.id } }
    );
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

// const updateSettings = async (req, res) => {
//   const { files, fields } = req.fileAttrb;

//   if (files.length === 2) {
//     try {
//       const result = await req.context.models.talent.update(
//         {
//           tale_fullname: fields[0].value,
//           tale_birthdate: fields[1].value,
//           tale_education: fields[2].value,
//           tale_major: fields[3].value,
//           tale_school_name: fields[4].value,
//           tale_handphone: fields[5].value,
//           tale_bootcamp: fields[6].value,
//           tale_year_graduate: parseInt(fields[7].value),
//           tale_gpa: parseInt(fields[8].value),
//           tale_city: fields[9].value,
//           tale_province: fields[10].value,
//           tale_tag_skill: fields[11].value,
//           tale_resume: files[0].file.newFilename,
//           tale_cover_letter: files[1].file.newFilename,
//         },
//         { returning: true, where: { tale_user_id: parseInt(req.params.id) } }
//       );
//       return res.send(result);
//     } catch (error) {
//       console.log(error);
//     }
//   } else if (files[0].fieldName === "tale_resume") {
//     try {
//       const result = await req.context.models.talent.update(
//         {
//           tale_fullname: fields[0].value,
//           tale_birthdate: fields[1].value,
//           tale_education: fields[2].value,
//           tale_major: fields[3].value,
//           tale_school_name: fields[4].value,
//           tale_handphone: fields[5].value,
//           tale_bootcamp: fields[6].value,
//           tale_year_graduate: parseInt(fields[7].value),
//           tale_gpa: parseInt(fields[8].value),
//           tale_city: fields[9].value,
//           tale_province: fields[10].value,
//           tale_tag_skill: fields[11].value,
//           tale_resume: files[0].file.newFilename,
//         },
//         { returning: true, where: { tale_user_id: parseInt(req.params.id) } }
//       );
//       return res.send(result);
//     } catch (error) {
//       console.log(error);
//     }
//   } else if (files[0].fieldName === "tale_cover_letter") {
//     try {
//       const result = await req.context.models.talent.update(
//         {
//           tale_fullname: fields[0].value,
//           tale_birthdate: fields[1].value,
//           tale_education: fields[2].value,
//           tale_major: fields[3].value,
//           tale_school_name: fields[4].value,
//           tale_handphone: fields[5].value,
//           tale_bootcamp: fields[6].value,
//           tale_year_graduate: parseInt(fields[7].value),
//           tale_gpa: parseInt(fields[8].value),
//           tale_city: fields[9].value,
//           tale_province: fields[10].value,
//           tale_tag_skill: fields[11].value,
//           tale_cover_letter: files[0].file.newFilename,
//         },
//         { returning: true, where: { tale_user_id: parseInt(req.params.id) } }
//       );
//       return res.send(result);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// };

const updateSettings = async (req, res) => {
  const { files, fields } = req.fileAttrb;

  if (files.length === 3) {
    try {
      const result = await req.context.models.talent.update(
        {
          tale_fullname: fields[0].value,
          tale_birthdate: fields[1].value,
          tale_education: fields[2].value,
          tale_major: fields[3].value,
          tale_school_name: fields[4].value,
          tale_handphone: fields[5].value,
          tale_bootcamp: fields[6].value,
          tale_year_graduate: parseInt(fields[7].value),
          tale_gpa: parseInt(fields[8].value),
          tale_city: fields[9].value,
          tale_province: fields[10].value,
          tale_tag_skill: fields[11].value,
          tale_resume: files[0].file.newFilename,
          tale_cover_letter: files[1].file.newFilename,
          tale_photo: files[2].file.newFilename,
        },
        { returning: true, where: { tale_user_id: parseInt(req.params.id) } }
      );
      return res.send(result);
    } catch (error) {
      console.log(error);
    }
  } else if (files.length === 2) {
    try {
      const result = await req.context.models.talent.update(
        {
          tale_fullname: fields[0].value,
          tale_birthdate: fields[1].value,
          tale_education: fields[2].value,
          tale_major: fields[3].value,
          tale_school_name: fields[4].value,
          tale_handphone: fields[5].value,
          tale_bootcamp: fields[6].value,
          tale_year_graduate: parseInt(fields[7].value),
          tale_gpa: parseInt(fields[8].value),
          tale_city: fields[9].value,
          tale_province: fields[10].value,
          tale_tag_skill: fields[11].value,
          tale_resume: files[0].file.newFilename,
          tale_cover_letter: files[1].file.newFilename,
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
          tale_education: fields[2].value,
          tale_major: fields[3].value,
          tale_school_name: fields[4].value,
          tale_handphone: fields[5].value,
          tale_bootcamp: fields[6].value,
          tale_year_graduate: parseInt(fields[7].value),
          tale_gpa: parseInt(fields[8].value),
          tale_city: fields[9].value,
          tale_province: fields[10].value,
          tale_tag_skill: fields[11].value,
          tale_resume: files[0].file.newFilename,
        },
        { returning: true, where: { tale_user_id: parseInt(req.params.id) } }
      );
      return res.send(result);
    } catch (error) {
      console.log(error);
    }
  } else if (files[0].fieldName === "tale_cover_letter") {
    try {
      const result = await req.context.models.talent.update(
        {
          tale_fullname: fields[0].value,
          tale_birthdate: fields[1].value,
          tale_education: fields[2].value,
          tale_major: fields[3].value,
          tale_school_name: fields[4].value,
          tale_handphone: fields[5].value,
          tale_bootcamp: fields[6].value,
          tale_year_graduate: parseInt(fields[7].value),
          tale_gpa: parseInt(fields[8].value),
          tale_city: fields[9].value,
          tale_province: fields[10].value,
          tale_tag_skill: fields[11].value,
          tale_cover_letter: files[0].file.newFilename,
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
          tale_education: fields[2].value,
          tale_major: fields[3].value,
          tale_school_name: fields[4].value,
          tale_handphone: fields[5].value,
          tale_bootcamp: fields[6].value,
          tale_year_graduate: parseInt(fields[7].value),
          tale_gpa: parseInt(fields[8].value),
          tale_city: fields[9].value,
          tale_province: fields[10].value,
          tale_tag_skill: fields[11].value,
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

const updateSettingsNoFile = async (req, res) => {
  const { tale_fullname, tale_birthdate, tale_education, tale_major, tale_school_name, tale_handphone, tale_bootcamp, tale_year_graduate, tale_gpa, tale_city, tale_province, tale_tag_skill, tale__user_id } = req.body;
  console.log(req.body);
  const result = await req.context.models.talent.update(
    {
      tale_fullname: tale_fullname,
      tale_birthdate: tale_birthdate,
      tale_education: tale_education,
      tale_major: tale_major,
      tale_school_name: tale_school_name,
      tale_handphone: tale_handphone,
      tale_bootcamp: tale_bootcamp,
      tale_year_graduate: tale_year_graduate,
      tale_gpa: tale_gpa,
      tale_city: tale_city,
      tale_province: tale_province,
      tale_tag_skill: tale_tag_skill,
    },
    {
      returning: true,
      where: { tale_user_id: req.params.id },
    }
  );
  return res.send(result);
};

export default {
  getTalent,
  create,
  update,
  updateSettings,
  updateSettingsNoFile,
};
