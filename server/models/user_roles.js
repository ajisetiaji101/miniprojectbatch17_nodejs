import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class user_roles extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    usro_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usro_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    usro_role_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'roles',
        key: 'role_id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_roles',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "usro_id_pk",
        unique: true,
        fields: [
          { name: "usro_id" },
        ]
      },
    ]
  });
  }
}
