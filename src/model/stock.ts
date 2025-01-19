import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { empresa, empresaId } from './empresa';
import type { producto, productoId } from './producto';
import type { sucursal, sucursalId } from './sucursal';

export interface stockAttributes {
  stockId: number;
  empresaId?: number;
  sucursalId?: number;
  prodId?: number;
  cantidadStock?: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type stockPk = "stockId";
export type stockId = stock[stockPk];
export type stockOptionalAttributes = "stockId" | "empresaId" | "sucursalId" | "prodId" | "cantidadStock" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type stockCreationAttributes = Optional<stockAttributes, stockOptionalAttributes>;

export class stock extends Model<stockAttributes, stockCreationAttributes> implements stockAttributes {
  stockId!: number;
  empresaId?: number;
  sucursalId?: number;
  prodId?: number;
  cantidadStock?: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // stock belongsTo empresa via empresaId
  empresa!: empresa;
  getEmpresa!: Sequelize.BelongsToGetAssociationMixin<empresa>;
  setEmpresa!: Sequelize.BelongsToSetAssociationMixin<empresa, empresaId>;
  createEmpresa!: Sequelize.BelongsToCreateAssociationMixin<empresa>;
  // stock belongsTo producto via prodId
  prod!: producto;
  getProd!: Sequelize.BelongsToGetAssociationMixin<producto>;
  setProd!: Sequelize.BelongsToSetAssociationMixin<producto, productoId>;
  createProd!: Sequelize.BelongsToCreateAssociationMixin<producto>;
  // stock belongsTo sucursal via sucursalId
  sucursal!: sucursal;
  getSucursal!: Sequelize.BelongsToGetAssociationMixin<sucursal>;
  setSucursal!: Sequelize.BelongsToSetAssociationMixin<sucursal, sucursalId>;
  createSucursal!: Sequelize.BelongsToCreateAssociationMixin<sucursal>;

  static initModel(sequelize: Sequelize.Sequelize): typeof stock {
    return sequelize.define('stock', {
    stockId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'stock_id'
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
      references: {
        model: 'sucursal',
        key: 'sucursal_id'
      },
      field: 'sucursal_id'
    },
    prodId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'producto',
        key: 'prod_id'
      },
      field: 'prod_id'
    },
    cantidadStock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'cantidad_stock'
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
    tableName: 'stock',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "stock_pkey",
        unique: true,
        fields: [
          { name: "stock_id" },
        ]
      },
    ]
  }) as typeof stock;
  }
}
