import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class curriculum extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    curr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    curr_name: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    curr_title: {
      type: DataTypes.STRING(155),
      allowNull: true
    },
    curr_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    curr_duration: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    curr_total_talents: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    curr_total_batch: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    curr_type: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    curr_tag: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    curr_inst_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'instructor',
        key: 'inst_id'
      }
    }
  }, {
    sequelize,
    tableName: 'curriculum',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "curr_id_pk",
        unique: true,
        fields: [
          { name: "curr_id" },
        ]
      },
    ]
  });
  }
}
