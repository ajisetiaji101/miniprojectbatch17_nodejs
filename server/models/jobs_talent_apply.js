import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class jobs_talent_apply extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    jtap_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    jtap_apply_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    jtap_intro: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    jtap_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    jtap_jobs_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jtap_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'jobs_talent_apply',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "jtap_id_pk",
        unique: true,
        fields: [
          { name: "jtap_id" },
        ]
      },
    ]
  });
  }
}
