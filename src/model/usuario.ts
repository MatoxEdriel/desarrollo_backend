import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface usuarioAttributes {
  usuId: number;
  usuNombre?: string;
  empresaId?: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type usuarioPk = "usuId";
export type usuarioId = usuario[usuarioPk];
export type usuarioOptionalAttributes = "usuId" | "usuNombre" | "empresaId" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type usuarioCreationAttributes = Optional<usuarioAttributes, usuarioOptionalAttributes>;

export class usuario extends Model<usuarioAttributes, usuarioCreationAttributes> implements usuarioAttributes {
  usuId!: number;
  usuNombre?: string;
  empresaId?: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof usuario {
    return sequelize.define('usuario', {
    usuId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'usu_id'
    },
    usuNombre: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'usu_nombre'
    },
    empresaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'empresa_id'
    },
    estado: {
      type: DataTypes.INTEGER,
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
    tableName: 'usuario',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "usuario_pkey",
        unique: true,
        fields: [
          { name: "usu_id" },
        ]
      },
    ]
  }) as typeof usuario;
  }
}
