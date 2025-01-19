import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface usuario_rolAttributes {
  usuRolId: number;
  usuId?: number;
  rolId?: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type usuario_rolPk = "usuRolId";
export type usuario_rolId = usuario_rol[usuario_rolPk];
export type usuario_rolOptionalAttributes = "usuRolId" | "usuId" | "rolId" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type usuario_rolCreationAttributes = Optional<usuario_rolAttributes, usuario_rolOptionalAttributes>;

export class usuario_rol extends Model<usuario_rolAttributes, usuario_rolCreationAttributes> implements usuario_rolAttributes {
  usuRolId!: number;
  usuId?: number;
  rolId?: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof usuario_rol {
    return sequelize.define('usuario_rol', {
    usuRolId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'usu_rol_id'
    },
    usuId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'usu_id'
    },
    rolId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'rol_id'
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
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'usu_id_act'
    }
  }, {
    tableName: 'usuario_rol',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "usuario_rol_pkey",
        unique: true,
        fields: [
          { name: "usu_rol_id" },
        ]
      },
    ]
  }) as typeof usuario_rol;
  }
}
