import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class client extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    client_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    client_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    client_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'client',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "client_id_pk",
        unique: true,
        fields: [
          { name: "client_id" },
        ]
      },
    ]
  });
  }
}
