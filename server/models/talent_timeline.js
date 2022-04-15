import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class talent_timeline extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    tati_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tati_timeline_name: {
      type: DataTypes.STRING(25),
      allowNull: true,
      references: {
        model: 'time_line',
        key: 'timeline_name'
      }
    },
    tati_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tati_tale_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'talent',
        key: 'tale_id'
      }
    }
  }, {
    sequelize,
    tableName: 'talent_timeline',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tati_id_pk",
        unique: true,
        fields: [
          { name: "tati_id" },
        ]
      },
    ]
  });
  }
}
