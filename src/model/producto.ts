import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { categoria, categoriaId } from './categoria';
import type { marca, marcaId } from './marca';
import type { movimiento_det_producto, movimiento_det_productoId } from './movimiento-det-producto';
import type { stock, stockId } from './stock';

export interface productoAttributes {
  prodId: number;
  prodDescripcion?: string;
  prodUltPrecio?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
  estado?: number;
  categoriaId?: number;
  empresaId?: number;
  proveedorId?: number;
  marcaId?: number;
}

export type productoPk = "prodId";
export type productoId = producto[productoPk];
export type productoOptionalAttributes = "prodId" | "prodDescripcion" | "prodUltPrecio" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct" | "estado" | "categoriaId" | "empresaId" | "proveedorId" | "marcaId";
export type productoCreationAttributes = Optional<productoAttributes, productoOptionalAttributes>;

export class producto extends Model<productoAttributes, productoCreationAttributes> implements productoAttributes {
  prodId!: number;
  prodDescripcion?: string;
  prodUltPrecio?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
  estado?: number;
  categoriaId?: number;
  empresaId?: number;
  proveedorId?: number;
  marcaId?: number;

  // producto belongsTo categoria via categoriaId
  categorium!: categoria;
  getCategorium!: Sequelize.BelongsToGetAssociationMixin<categoria>;
  setCategorium!: Sequelize.BelongsToSetAssociationMixin<categoria, categoriaId>;
  createCategorium!: Sequelize.BelongsToCreateAssociationMixin<categoria>;
  // producto belongsTo marca via marcaId
  marca!: marca;
  getMarca!: Sequelize.BelongsToGetAssociationMixin<marca>;
  setMarca!: Sequelize.BelongsToSetAssociationMixin<marca, marcaId>;
  createMarca!: Sequelize.BelongsToCreateAssociationMixin<marca>;
  // producto hasMany movimiento_det_producto via productoId
  movimientoDetProductos!: movimiento_det_producto[];
  getMovimientoDetProductos!: Sequelize.HasManyGetAssociationsMixin<movimiento_det_producto>;
  setMovimientoDetProductos!: Sequelize.HasManySetAssociationsMixin<movimiento_det_producto, movimiento_det_productoId>;
  addMovimientoDetProducto!: Sequelize.HasManyAddAssociationMixin<movimiento_det_producto, movimiento_det_productoId>;
  addMovimientoDetProductos!: Sequelize.HasManyAddAssociationsMixin<movimiento_det_producto, movimiento_det_productoId>;
  createMovimientoDetProducto!: Sequelize.HasManyCreateAssociationMixin<movimiento_det_producto>;
  removeMovimientoDetProducto!: Sequelize.HasManyRemoveAssociationMixin<movimiento_det_producto, movimiento_det_productoId>;
  removeMovimientoDetProductos!: Sequelize.HasManyRemoveAssociationsMixin<movimiento_det_producto, movimiento_det_productoId>;
  hasMovimientoDetProducto!: Sequelize.HasManyHasAssociationMixin<movimiento_det_producto, movimiento_det_productoId>;
  hasMovimientoDetProductos!: Sequelize.HasManyHasAssociationsMixin<movimiento_det_producto, movimiento_det_productoId>;
  countMovimientoDetProductos!: Sequelize.HasManyCountAssociationsMixin;
  // producto hasMany stock via prodId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof producto {
    return sequelize.define('producto', {
    prodId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'prod_id'
    },
    prodDescripcion: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'prod_descripcion'
    },
    prodUltPrecio: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'prod_ult_precio'
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
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    categoriaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'categoria',
        key: 'categoria_id'
      },
      field: 'categoria_id'
    },
    empresaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'empresa_id'
    },
    proveedorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'proveedor_id'
    },
    marcaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'marca',
        key: 'marca_id'
      },
      field: 'marca_id'
    }
  }, {
    tableName: 'producto',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "producto_pkey",
        unique: true,
        fields: [
          { name: "prod_id" },
        ]
      },
    ]
  }) as typeof producto;
  }
}
