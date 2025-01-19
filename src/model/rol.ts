import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface rolAttributes {
  rolId: number;
  rolDescripcion?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: string;
}

export type rolPk = "rolId";
export type rolId = rol[rolPk];
export type rolOptionalAttributes = "rolId" | "rolDescripcion" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type rolCreationAttributes = Optional<rolAttributes, rolOptionalAttributes>;

export class rol extends Model<rolAttributes, rolCreationAttributes> implements rolAttributes {
  rolId!: number;
  rolDescripcion?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof rol {
    return sequelize.define('rol', {
    rolId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'rol_id'
    },
    rolDescripcion: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'rol_descripcion'
    },
    estado: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    fechaHoraReg: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'fecha_hora_reg'
    },
    fechaHoraAct: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'fecha_hora_act'
    },
    usuIdReg: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'usu_id_reg'
    },
    usuIdAct: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'usu_id_act'
    }
  }, {
    tableName: 'rol',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "rol_pkey",
        unique: true,
        fields: [
          { name: "rol_id" },
        ]
      },
    ]
  }) as typeof rol;
  }
}
