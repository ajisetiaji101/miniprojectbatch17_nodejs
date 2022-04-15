import _sequelize, { Sequelize } from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _batch from  "./batch.js";
import _client from  "./client.js";
import _curriculum from  "./curriculum.js";
import _curriculum_materi from  "./curriculum_materi.js";
import _curriculum_reviews from  "./curriculum_reviews.js";
import _instructor from  "./instructor.js";
import _placement from  "./placement.js";
import _roles from  "./roles.js";
import _talent from  "./talent.js";
import _talent_batch from  "./talent_batch.js";
import _talent_placement from  "./talent_placement.js";
import _talent_timeline from  "./talent_timeline.js";
import _time_line from  "./time_line.js";
import _user_roles from  "./user_roles.js";
import _users from  "./users.js";

import config from "../config/config";

const sequelize = new Sequelize (
  config.db_name,
  config.db_username,
  config.db_password,
  {
    dialect : "postgres",
    pool : {
      max : 5,
      min : 0,
      acquire : 30000,
      idle : 10000
    }
  }
)

const initModels = (sequelize) => {
  const batch = _batch.init(sequelize, DataTypes);
  const client = _client.init(sequelize, DataTypes);
  const curriculum = _curriculum.init(sequelize, DataTypes);
  const curriculum_materi = _curriculum_materi.init(sequelize, DataTypes);
  const curriculum_reviews = _curriculum_reviews.init(sequelize, DataTypes);
  const instructor = _instructor.init(sequelize, DataTypes);
  const placement = _placement.init(sequelize, DataTypes);
  const roles = _roles.init(sequelize, DataTypes);
  const talent = _talent.init(sequelize, DataTypes);
  const talent_batch = _talent_batch.init(sequelize, DataTypes);
  const talent_placement = _talent_placement.init(sequelize, DataTypes);
  const talent_timeline = _talent_timeline.init(sequelize, DataTypes);
  const time_line = _time_line.init(sequelize, DataTypes);
  const user_roles = _user_roles.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  talent_batch.belongsTo(batch, { as: "taba_batch", foreignKey: "taba_batch_id"});
  batch.hasMany(talent_batch, { as: "talent_batches", foreignKey: "taba_batch_id"});
  placement.belongsTo(client, { as: "place_client", foreignKey: "place_client_id"});
  client.hasMany(placement, { as: "placements", foreignKey: "place_client_id"});
  curriculum_materi.belongsTo(curriculum, { as: "cuma_curr", foreignKey: "cuma_curr_id"});
  curriculum.hasMany(curriculum_materi, { as: "curriculum_materis", foreignKey: "cuma_curr_id"});
  curriculum_reviews.belongsTo(curriculum, { as: "cure_curr", foreignKey: "cure_curr_id"});
  curriculum.hasMany(curriculum_reviews, { as: "curriculum_reviews", foreignKey: "cure_curr_id"});
  curriculum_materi.belongsTo(curriculum_materi, { as: "cuma_cuma", foreignKey: "cuma_cuma_id"});
  curriculum_materi.hasMany(curriculum_materi, { as: "curriculum_materis", foreignKey: "cuma_cuma_id"});
  batch.belongsTo(instructor, { as: "batch_inst", foreignKey: "batch_inst_id"});
  instructor.hasMany(batch, { as: "batches", foreignKey: "batch_inst_id"});
  curriculum.belongsTo(instructor, { as: "curr_inst", foreignKey: "curr_inst_id"});
  instructor.hasMany(curriculum, { as: "curriculums", foreignKey: "curr_inst_id"});
  talent_placement.belongsTo(placement, { as: "tapl_place", foreignKey: "tapl_place_id"});
  placement.hasMany(talent_placement, { as: "talent_placements", foreignKey: "tapl_place_id"});
  user_roles.belongsTo(roles, { as: "usro_role", foreignKey: "usro_role_id"});
  roles.hasMany(user_roles, { as: "user_roles", foreignKey: "usro_role_id"});
  talent_batch.belongsTo(talent, { as: "taba_tale", foreignKey: "taba_tale_id"});
  talent.hasMany(talent_batch, { as: "talent_batches", foreignKey: "taba_tale_id"});
  talent_placement.belongsTo(talent, { as: "tapl_tale", foreignKey: "tapl_tale_id"});
  talent.hasMany(talent_placement, { as: "talent_placements", foreignKey: "tapl_tale_id"});
  talent_timeline.belongsTo(talent, { as: "tati_tale", foreignKey: "tati_tale_id"});
  talent.hasMany(talent_timeline, { as: "talent_timelines", foreignKey: "tati_tale_id"});
  talent_timeline.belongsTo(time_line, { as: "tati_timeline_name_time_line", foreignKey: "tati_timeline_name"});
  time_line.hasMany(talent_timeline, { as: "talent_timelines", foreignKey: "tati_timeline_name"});
  curriculum_reviews.belongsTo(users, { as: "cure_user", foreignKey: "cure_user_id"});
  users.hasMany(curriculum_reviews, { as: "curriculum_reviews", foreignKey: "cure_user_id"});
  talent.belongsTo(users, { as: "tale_user", foreignKey: "tale_user_id"});
  users.hasMany(talent, { as: "talents", foreignKey: "tale_user_id"});
  user_roles.belongsTo(users, { as: "usro_user", foreignKey: "usro_user_id"});
  users.hasMany(user_roles, { as: "user_roles", foreignKey: "usro_user_id"});

  return {
    batch,
    client,
    curriculum,
    curriculum_materi,
    curriculum_reviews,
    instructor,
    placement,
    roles,
    talent,
    talent_batch,
    talent_placement,
    talent_timeline,
    time_line,
    user_roles,
    users,
  };
}

const models = initModels(sequelize);

export default models;
export {sequelize};
