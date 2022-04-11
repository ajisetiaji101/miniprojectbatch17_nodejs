import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class talent_placement extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    tapl_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tapl_drop: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    tapl_notes: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tapl_drop_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tapl_tale_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'talent',
        key: 'tale_id'
      }
    },
    tapl_place_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'placement',
        key: 'place_id'
      }
    }
  }, {
    sequelize,
    tableName: 'talent_placement',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tapl_id_pk",
        unique: true,
        fields: [
          { name: "tapl_id" },
        ]
      },
    ]
  });
  }
}
