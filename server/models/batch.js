import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class batch extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    batch_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    batch_name: {
      type: DataTypes.STRING(15),
      allowNull: true,
      unique: "batch_name_uq"
    },
    batch_technology: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    batch_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    batch_end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    batch_duration: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    batch_type: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    batch_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    batch_inst_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'instructor',
        key: 'inst_id'
      }
    }
  }, {
    sequelize,
    tableName: 'batch',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "batch_id_pk",
        unique: true,
        fields: [
          { name: "batch_id" },
        ]
      },
      {
        name: "batch_name_uq",
        unique: true,
        fields: [
          { name: "batch_name" },
        ]
      },
    ]
  });
  }
}
