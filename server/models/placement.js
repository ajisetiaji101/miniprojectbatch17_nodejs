import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class placement extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    place_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    place_purchase_order: {
      type: DataTypes.STRING(55),
      allowNull: true,
      unique: "place_purchase_order_uq"
    },
    place_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    place_end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    place_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    place_note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    place_client_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'client',
        key: 'client_id'
      }
    }
  }, {
    sequelize,
    tableName: 'placement',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "place_id_pk",
        unique: true,
        fields: [
          { name: "place_id" },
        ]
      },
      {
        name: "place_purchase_order_uq",
        unique: true,
        fields: [
          { name: "place_purchase_order" },
        ]
      },
    ]
  });
  }
}
