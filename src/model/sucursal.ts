import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { movimiento_cab, movimiento_cabId } from './movimiento-cab';
import type { stock, stockId } from './stock';

export interface sucursalAttributes {
  sucursalId: number;
  sucursalRuc?: string;
  sucursalNombre?: string;
  sucursalDireccion?: string;
  sucursalTelefono?: string;
  estado?: number;
  fechaHoraReg?: Date;
  usuIdReg?: number;
  fechaHoraAct?: Date;
  empresaId?: number;
  codEstablecimientoSri?: string;
}

export type sucursalPk = "sucursalId";
export type sucursalId = sucursal[sucursalPk];
export type sucursalOptionalAttributes = "sucursalId" | "sucursalRuc" | "sucursalNombre" | "sucursalDireccion" | "sucursalTelefono" | "estado" | "fechaHoraReg" | "usuIdReg" | "fechaHoraAct" | "empresaId" | "codEstablecimientoSri";
export type sucursalCreationAttributes = Optional<sucursalAttributes, sucursalOptionalAttributes>;

export class sucursal extends Model<sucursalAttributes, sucursalCreationAttributes> implements sucursalAttributes {
  sucursalId!: number;
  sucursalRuc?: string;
  sucursalNombre?: string;
  sucursalDireccion?: string;
  sucursalTelefono?: string;
  estado?: number;
  fechaHoraReg?: Date;
  usuIdReg?: number;
  fechaHoraAct?: Date;
  empresaId?: number;
  codEstablecimientoSri?: string;

  // sucursal hasMany movimiento_cab via sucursalId
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
  // sucursal hasMany stock via sucursalId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof sucursal {
    return sequelize.define('sucursal', {
    sucursalId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'sucursal_id'
    },
    sucursalRuc: {
      type: DataTypes.STRING(13),
      allowNull: true,
      field: 'sucursal_ruc'
    },
    sucursalNombre: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'sucursal_nombre'
    },
    sucursalDireccion: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'sucursal_direccion'
    },
    sucursalTelefono: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'sucursal_telefono'
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
    usuIdReg: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'usu_id_reg'
    },
    fechaHoraAct: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'fecha_hora_act'
    },
    empresaId: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'empresa_id'
    },
    codEstablecimientoSri: {
      type: DataTypes.CHAR(3),
      allowNull: true,
      field: 'cod_establecimiento_sri'
    }
  }, {
    tableName: 'sucursal',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "sucursal_pkey",
        unique: true,
        fields: [
          { name: "sucursal_id" },
        ]
      },
    ]
  }) as typeof sucursal;
  }
}
