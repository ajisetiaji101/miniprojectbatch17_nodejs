import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class curriculum extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    curr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    curr_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    curr_title: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    curr_headline: {
      type: DataTypes.STRING(155),
      allowNull: true
    },
    curr_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    curr_duration: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    curr_learning_type: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    curr_type_payment: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    curr_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    curr_category: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    curr_language: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    curr_min_score: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    curr_tag_skill: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    curr_roadmap_materi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    curr_total_talents: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    curr_total_batch: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    curr_rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    curr_createdon: {
      type: DataTypes.DATE,
      allowNull: true
    },
    curr_lastupdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    curr_logo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    curr_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    curr_inst_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'instructor',
        key: 'inst_id'
      }
    }
  }, {
    sequelize,
    tableName: 'curriculum',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "curr_id_pk",
        unique: true,
        fields: [
          { name: "curr_id" },
        ]
      },
    ]
  });
  }
}
