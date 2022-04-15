import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class talent_batch extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    taba_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    taba_drop: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    taba_notes: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    taba_drop_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    taba_review: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    taba_tale_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'talent',
        key: 'tale_id'
      }
    },
    taba_batch_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'batch',
        key: 'batch_id'
      }
    }
  }, {
    sequelize,
    tableName: 'talent_batch',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "taba_id_pk",
        unique: true,
        fields: [
          { name: "taba_id" },
        ]
      },
    ]
  });
  }
}
