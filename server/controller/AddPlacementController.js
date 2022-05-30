// simport { Op } from "sequelize";
import { sequelize } from "../models/init-models";
// import batch from "../models/batch";
// import talent_batch from "../models/talent_batch";
// import talent from "../models/talent";

const findAll = async (req, res, next) => {
  try {
    const placement = await req.context.models.placement.findAll({
      // include : [{
      //     model : req.context.models.countries
      // }]
    });
    return res.send(placement);
  } catch (error) {
    return res.status(404).send("not found");
  }
};
//localhost:3001/codeid/api/placement

const create = async (req, res, next) => {
  const {
    place_contract_no, //harus selalu baru
    place_created,
    place_start_date,
    place_end_date,
    place_status,
    place_note,
    place_client_id,
  } = req.body;
  try {
    const placement = await req.context.models.placement.create({
      //place_id            : req.body.place_id,
      place_contract_no: place_contract_no, //harus selalu baru
      place_created: place_created,
      place_start_date: place_start_date,
      place_end_date: place_end_date,
      place_status: place_status,
      place_note: place_note,
      place_client_id: parseInt(place_client_id),
    });
    req.place_id = placement.dataValues;
    next();
    //return res.send("success");
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
};

// {
//     "place_contract_no" : "PO#202201-0004", //setiap input ganti baru
//     "place_created" : "2022-05-15",
//     "place_start_date" : "2022-05-15",
//     "place_end_date" : "2022-05-15",
//     "place_status" : "trial",
//     "place_note" : "trial",
//      "place_client_id" : 2
//     }
const createtpl = async (req, res, next) => {
  const { place_id } = req.place_id;
  const {
    place_contract_no, //harus selalu baru
    place_created,
    place_start_date,
    place_end_date,
    place_status,
    place_note,
    place_client_id,
    place_user_id,
  } = req.body;
  const result = {
    place_contract_no, //harus selalu baru
    place_created,
    place_start_date,
    place_end_date,
    place_status,
    place_note,
    place_client_id,
    place_user_id,
  };
  try {
    for (let j = 0; j < place_user_id.length; j++) {
      await req.context.models.talent_placement.create({
        //tapl_id:"",
        tapl_drop: null,
        tapl_notes: null,
        tapl_drop_date: null,
        tapl_tale_id: parseInt(place_user_id[j]),
        tapl_place_id: place_id,
      });
    }
    return res.send(result);
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
};
const remove = async (req, res, next) => {
  try {
    const placement = await req.context.models.placement.destroy({
      where: { place_id: req.params.id },
    });
    return res.send("delete" + placement + "rows");
  } catch (error) {
    return res.status(404).send("not found");
  }
};
//localhost:3001/codeid/api/placement/4

const search = async (req, res, next) => {
  try {
    const bat = await sequelize.query(
      `select t.tale_id, t.tale_fullname,b.batch_name, b.batch_technology, t.tale_photo FROM talent as t
      join users as u
      on t.tale_user_id = u.user_id
      join batch as b
      on u.user_id = b.batch_user_id
      where t.tale_status='Talent'`,
      {
        type: sequelize.QueryTypes.SELECT,
        model: req.context.models.talent,
        mapToModel: true,
      }
    );
    return res.send(bat);
  } catch (error) {
    return res.status(404).send("not found");
  }
};
//localhost:3001/codeid/api/placement/batch

const cari = async (req, res, next) => {
  try {
    const placement = await req.context.models.client.findAll({
      // include : [{
      //     model : req.context.models.countries
      // }]
    });
    return res.send(placement);
  } catch (error) {
    return res.status(404).send("not found");
  }
};
export default {
  findAll,
  create,
  remove,
  search,
  cari,
  createtpl,
};
