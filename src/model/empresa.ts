import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ciudad, ciudadId } from './ciudad';
import type { movimiento_cab, movimiento_cabId } from './movimiento-cab';
import type { punto_emision_sri, punto_emision_sriId } from './punto-emision-sri';
import type { stock, stockId } from './stock';

export interface empresaAttributes {
  empresaId: number;
  empresaRuc?: string;
  empresaNombre?: string;
  empresaRazon?: string;
  empresaDireccionMatriz?: string;
  empresaTelefonoMatriz?: string;
  ciudadId: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type empresaPk = "empresaId";
export type empresaId = empresa[empresaPk];
export type empresaOptionalAttributes = "empresaId" | "empresaRuc" | "empresaNombre" | "empresaRazon" | "empresaDireccionMatriz" | "empresaTelefonoMatriz" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type empresaCreationAttributes = Optional<empresaAttributes, empresaOptionalAttributes>;

export class empresa extends Model<empresaAttributes, empresaCreationAttributes> implements empresaAttributes {
  empresaId!: number;
  empresaRuc?: string;
  empresaNombre?: string;
  empresaRazon?: string;
  empresaDireccionMatriz?: string;
  empresaTelefonoMatriz?: string;
  ciudadId!: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // empresa belongsTo ciudad via ciudadId
  ciudad!: ciudad;
  getCiudad!: Sequelize.BelongsToGetAssociationMixin<ciudad>;
  setCiudad!: Sequelize.BelongsToSetAssociationMixin<ciudad, ciudadId>;
  createCiudad!: Sequelize.BelongsToCreateAssociationMixin<ciudad>;
  // empresa hasMany movimiento_cab via empresaId
  movimientoCabs!: movimiento_cab[];
  getMovimientoCabs!: Sequelize.HasManyGetAssociationsMixin<movimiento_cab>;
  setMovimientoCabs!: Sequelize.HasManySetAssociationsMixin<movimiento_cab, movimiento_cabId>;
  addMovimientoCab!: Sequelize.HasManyAddAssociationMixin<movimiento_cab, movimiento_cabId>;
  addMovimientoCabs!: Sequelize.HasManyAddAssociationsMixin<movimiento_cab, movimiento_cabId>;
  createMovimientoCab!: Sequelize.HasManyCreateAssociationMixin<movimiento_cab>;
  removeMovimientoCab!: Sequelize.HasManyRemoveAssociationMixin<movimiento_cab, movimiento_cabId>;
  removeMovimientoCabs!: Sequelize.HasManyRemoveAssociationsMixin<movimiento_cab, movimiento_cabId>;
  hasMovimientoCab!: Sequelize.HasManyHasAssociationMixin<movimiento_cab, movimiento_cabId>;
  hasMovimientoCabs!: Sequelize.HasManyHasAssociationsMixin<movimiento_cab, movimiento_cabId>;
  countMovimientoCabs!: Sequelize.HasManyCountAssociationsMixin;
  // empresa hasMany punto_emision_sri via empresaId
  puntoEmisionSris!: punto_emision_sri[];
  getPuntoEmisionSris!: Sequelize.HasManyGetAssociationsMixin<punto_emision_sri>;
  setPuntoEmisionSris!: Sequelize.HasManySetAssociationsMixin<punto_emision_sri, punto_emision_sriId>;
  addPuntoEmisionSri!: Sequelize.HasManyAddAssociationMixin<punto_emision_sri, punto_emision_sriId>;
  addPuntoEmisionSris!: Sequelize.HasManyAddAssociationsMixin<punto_emision_sri, punto_emision_sriId>;
  createPuntoEmisionSri!: Sequelize.HasManyCreateAssociationMixin<punto_emision_sri>;
  removePuntoEmisionSri!: Sequelize.HasManyRemoveAssociationMixin<punto_emision_sri, punto_emision_sriId>;
  removePuntoEmisionSris!: Sequelize.HasManyRemoveAssociationsMixin<punto_emision_sri, punto_emision_sriId>;
  hasPuntoEmisionSri!: Sequelize.HasManyHasAssociationMixin<punto_emision_sri, punto_emision_sriId>;
  hasPuntoEmisionSris!: Sequelize.HasManyHasAssociationsMixin<punto_emision_sri, punto_emision_sriId>;
  countPuntoEmisionSris!: Sequelize.HasManyCountAssociationsMixin;
  // empresa hasMany stock via empresaId
  stocks!: stock[];
  getStocks!: Sequelize.HasManyGetAssociationsMixin<stock>;
  setStocks!: Sequelize.HasManySetAssociationsMixin<stock, stockId>;
  addStock!: Sequelize.HasManyAddAssociationMixin<stock, stockId>;
  addStocks!: Sequelize.HasManyAddAssociationsMixin<stock, stockId>;
  createStock!: Sequelize.HasManyCreateAssociationMixin<stock>;
  removeStock!: Sequelize.HasManyRemoveAssociationMixin<stock, stockId>;
  removeStocks!: Sequelize.HasManyRemoveAssociationsMixin<stock, stockId>;
  hasStock!: Sequelize.HasManyHasAssociationMixin<stock, stockId>;
  hasStocks!: Sequelize.HasManyHasAssociationsMixin<stock, stockId>;
  countStocks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof empresa {
    return sequelize.define('empresa', {
    empresaId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'empresa_id'
    },
    empresaRuc: {
      type: DataTypes.STRING(13),
      allowNull: true,
      field: 'empresa_ruc'
    },
    empresaNombre: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'empresa_nombre'
    },
    empresaRazon: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'empresa_razon'
    },
    empresaDireccionMatriz: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'empresa_direccion_matriz'
    },
    empresaTelefonoMatriz: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'empresa_telefono_matriz'
    },
    ciudadId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ciudad',
        key: 'ciudad_id'
      },
      field: 'ciudad_id'
    },
    estado: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    fechaHoraReg: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now'),
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
    tableName: 'empresa',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "empresa_pkey",
        unique: true,
        fields: [
          { name: "empresa_id" },
        ]
      },
    ]
  }) as typeof empresa;
  }
}
