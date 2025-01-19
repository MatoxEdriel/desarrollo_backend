import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { empresa, empresaId } from './empresa';

export interface punto_emision_sriAttributes {
  puntoEmisionId: number;
  puntoEmision?: string;
  empresaId?: number;
  sucursalId?: number;
  codEstablecimientoSri?: string;
  ultSecuencia?: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type punto_emision_sriPk = "puntoEmisionId";
export type punto_emision_sriId = punto_emision_sri[punto_emision_sriPk];
export type punto_emision_sriOptionalAttributes = "puntoEmisionId" | "puntoEmision" | "empresaId" | "sucursalId" | "codEstablecimientoSri" | "ultSecuencia" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type punto_emision_sriCreationAttributes = Optional<punto_emision_sriAttributes, punto_emision_sriOptionalAttributes>;

export class punto_emision_sri extends Model<punto_emision_sriAttributes, punto_emision_sriCreationAttributes> implements punto_emision_sriAttributes {
  puntoEmisionId!: number;
  puntoEmision?: string;
  empresaId?: number;
  sucursalId?: number;
  codEstablecimientoSri?: string;
  ultSecuencia?: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // punto_emision_sri belongsTo empresa via empresaId
  empresa!: empresa;
  getEmpresa!: Sequelize.BelongsToGetAssociationMixin<empresa>;
  setEmpresa!: Sequelize.BelongsToSetAssociationMixin<empresa, empresaId>;
  createEmpresa!: Sequelize.BelongsToCreateAssociationMixin<empresa>;

  static initModel(sequelize: Sequelize.Sequelize): typeof punto_emision_sri {
    return sequelize.define('punto_emision_sri', {
    puntoEmisionId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'punto_emision_id'
    },
    puntoEmision: {
      type: DataTypes.CHAR(3),
      allowNull: true,
      field: 'punto_emision'
    },
    empresaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'empresa',
        key: 'empresa_id'
      },
      field: 'empresa_id'
    },
    sucursalId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'sucursal_id'
    },
    codEstablecimientoSri: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'cod_establecimiento_sri'
    },
    ultSecuencia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'ult_secuencia'
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
    tableName: 'punto_emision_sri',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "punto_emision_sri_pkey",
        unique: true,
        fields: [
          { name: "punto_emision_id" },
        ]
      },
    ]
  }) as typeof punto_emision_sri;
  }
}
