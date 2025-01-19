import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tarjeta_credito, tarjeta_creditoCreationAttributes, tarjeta_creditoId } from './tarjeta-credito';

export interface industriaAttributes {
  industriaId: number;
  industriaDescripcion?: string;
  estado?: number;
  fechaHoraReg?: string;
  fechaHoraAct?: string;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type industriaPk = "industriaId";
export type industriaId = industria[industriaPk];
export type industriaOptionalAttributes = "industriaId" | "industriaDescripcion" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type industriaCreationAttributes = Optional<industriaAttributes, industriaOptionalAttributes>;

export class industria extends Model<industriaAttributes, industriaCreationAttributes> implements industriaAttributes {
  industriaId!: number;
  industriaDescripcion?: string;
  estado?: number;
  fechaHoraReg?: string;
  fechaHoraAct?: string;
  usuIdReg?: number;
  usuIdAct?: number;

  // industria hasOne tarjeta_credito via tarjetaId
  tarjetaCredito!: tarjeta_credito;
  getTarjetaCredito!: Sequelize.HasOneGetAssociationMixin<tarjeta_credito>;
  setTarjetaCredito!: Sequelize.HasOneSetAssociationMixin<tarjeta_credito, tarjeta_creditoId>;
  createTarjetaCredito!: Sequelize.HasOneCreateAssociationMixin<tarjeta_credito>;

  static initModel(sequelize: Sequelize.Sequelize): typeof industria {
    return sequelize.define('industria', {
    industriaId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'industria_id'
    },
    industriaDescripcion: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'industria_descripcion'
    },
    estado: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    fechaHoraReg: {
      type: DataTypes.TIME,
      allowNull: true,
      field: 'fecha_hora_reg'
    },
    fechaHoraAct: {
      type: DataTypes.TIME,
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
    tableName: 'industria',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "industria_pkey",
        unique: true,
        fields: [
          { name: "industria_id" },
        ]
      },
    ]
  }) as typeof industria;
  }
}
