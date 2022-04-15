import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class time_line extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    timeline_name: {
      type: DataTypes.STRING(25),
      allowNull: false,
      primaryKey: true
    },
    timeline_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'time_line',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "timeline_name_pk",
        unique: true,
        fields: [
          { name: "timeline_name" },
        ]
      },
    ]
  });
  }
}
