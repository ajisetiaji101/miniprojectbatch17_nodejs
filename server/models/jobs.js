import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class jobs extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        jobs_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        jobs_post_no: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        jobs_title: {
          type: DataTypes.STRING(85),
          allowNull: true,
        },
        jobs_start_date: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        jobs_end_date: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        jobs_upto_salary: {
          type: DataTypes.DECIMAL,
          allowNull: true,
        },
        job_upto_experience: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        jobs_description: {
          type: DataTypes.STRING(500),
          allowNull: true,
        },
        jobs_primary_skill: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        jobs_secondary_skill: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        jobs_industry_type: {
          type: DataTypes.STRING(25),
          allowNull: true,
        },
        jobs_working_type: {
          type: DataTypes.STRING(15),
          allowNull: true,
        },
        jobs_publish: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
        },
        jobs_remotely: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
        },
        jobs_spec_education: {
          type: DataTypes.STRING(25),
          allowNull: true,
        },
        jobs_benefit: {
          type: DataTypes.STRING(500),
          allowNull: true,
        },
        jobs_specification: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
        jobs_status: {
          type: DataTypes.STRING(15),
          allowNull: true,
        },
        jobs_location: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        jobs_city: {
          type: DataTypes.STRING(85),
          allowNull: true,
        },
        jobs_user_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "users",
            key: "user_id",
          },
        },
        jobs_client_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "client",
            key: "client_id",
          },
        },
        jobs_photo: {
          type: DataTypes.STRING(85),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "jobs",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "jobs_id_pk",
            unique: true,
            fields: [{ name: "jobs_id" }],
          },
        ],
      }
    );
  }
}
