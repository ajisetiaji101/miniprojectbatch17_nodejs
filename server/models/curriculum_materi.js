import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class curriculum_materi extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    cuma_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cuma_section: {
      type: DataTypes.STRING(155),
      allowNull: true
    },
    cuma_subsection: {
      type: DataTypes.STRING(155),
      allowNull: true
    },
    cuma_attachment: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cuma_attachment_type: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    cuma_duration: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    cuma_curr_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'curriculum',
        key: 'curr_id'
      }
    },
    cuma_cuma_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'curriculum_materi',
        key: 'cuma_id'
      }
    }
  }, {
    sequelize,
    tableName: 'curriculum_materi',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cuma_id_pk",
        unique: true,
        fields: [
          { name: "cuma_id" },
        ]
      },
    ]
  });
  }
}
