import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class talent extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    tale_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tale_fullname: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    tale_email: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    tale_birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tale_status_timeline: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    tale_education: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    tale_school_name: {
      type: DataTypes.STRING(85),
      allowNull: true
    },
    tale_major: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    tale_graduate: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    tale_gpa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tale_handphone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    tale_bootcamp: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    tale_motivation: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    tale_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tale_city: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    tale_province: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    tale_role: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    tale_candidat_resume: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    tale_resume: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    tale_cover_letter: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    tale_photo: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    tale_position: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    tale_scale_skill: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tale_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    tale_status_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tale_tag_skill: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tale_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'talent',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tale_id_pk",
        unique: true,
        fields: [
          { name: "tale_id" },
        ]
      },
    ]
  });
  }
}
