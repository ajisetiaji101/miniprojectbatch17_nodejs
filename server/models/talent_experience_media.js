import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class talent_experience_media extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    teme_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    teme_url_link: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    teme_media_upload: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    teme_taex_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'talent_experience',
        key: 'taex_id'
      }
    }
  }, {
    sequelize,
    tableName: 'talent_experience_media',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "teme_id_pk",
        unique: true,
        fields: [
          { name: "teme_id" },
        ]
      },
    ]
  });
  }
}
