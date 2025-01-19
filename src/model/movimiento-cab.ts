import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { cliente, clienteId } from './cliente';
import type { empresa, empresaId } from './empresa';
import type { movimiento_det_pagos, movimiento_det_pagosId } from './movimiento-det-pagos';
import type { movimiento_det_producto, movimiento_det_productoId } from './movimiento-det-producto';
import type { proveedor, proveedorId } from './proveedor';
import type { sucursal, sucursalId } from './sucursal';
import type { tipo_movimiento, tipo_movimientoId } from './tipo-movimiento';

export interface movimiento_cabAttributes {
  movicabId: number;
  tipomovId?: number;
  tipomovIngEgr?: number;
  empresaId?: number;
  sucursalId?: number;
  secuenciaFactura?: string;
  autorizacionSri?: string;
  claveAcceso?: string;
  clienteId?: number;
  puntovtaId?: number;
  proveedorId?: number;
  estado?: string;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type movimiento_cabPk = "movicabId";
export type movimiento_cabId = movimiento_cab[movimiento_cabPk];
export type movimiento_cabOptionalAttributes = "movicabId" | "tipomovId" | "tipomovIngEgr" | "empresaId" | "sucursalId" | "secuenciaFactura" | "autorizacionSri" | "claveAcceso" | "clienteId" | "puntovtaId" | "proveedorId" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type movimiento_cabCreationAttributes = Optional<movimiento_cabAttributes, movimiento_cabOptionalAttributes>;

export class movimiento_cab extends Model<movimiento_cabAttributes, movimiento_cabCreationAttributes> implements movimiento_cabAttributes {
  movicabId!: number;
  tipomovId?: number;
  tipomovIngEgr?: number;
  empresaId?: number;
  sucursalId?: number;
  secuenciaFactura?: string;
  autorizacionSri?: string;
  claveAcceso?: string;
  clienteId?: number;
  puntovtaId?: number;
  proveedorId?: number;
  estado?: string;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // movimiento_cab belongsTo cliente via clienteId
  cliente!: cliente;
  getCliente!: Sequelize.BelongsToGetAssociationMixin<cliente>;
  setCliente!: Sequelize.BelongsToSetAssociationMixin<cliente, clienteId>;
  createCliente!: Sequelize.BelongsToCreateAssociationMixin<cliente>;
  // movimiento_cab belongsTo empresa via empresaId
  empresa!: empresa;
  getEmpresa!: Sequelize.BelongsToGetAssociationMixin<empresa>;
  setEmpresa!: Sequelize.BelongsToSetAssociationMixin<empresa, empresaId>;
  createEmpresa!: Sequelize.BelongsToCreateAssociationMixin<empresa>;
  // movimiento_cab hasMany movimiento_det_pagos via movicabId
  movimientoDetPagos!: movimiento_det_pagos[];
  getMovimientoDetPagos!: Sequelize.HasManyGetAssociationsMixin<movimiento_det_pagos>;
  setMovimientoDetPagos!: Sequelize.HasManySetAssociationsMixin<movimiento_det_pagos, movimiento_det_pagosId>;
  addMovimientoDetPago!: Sequelize.HasManyAddAssociationMixin<movimiento_det_pagos, movimiento_det_pagosId>;
  addMovimientoDetPagos!: Sequelize.HasManyAddAssociationsMixin<movimiento_det_pagos, movimiento_det_pagosId>;
  createMovimientoDetPago!: Sequelize.HasManyCreateAssociationMixin<movimiento_det_pagos>;
  removeMovimientoDetPago!: Sequelize.HasManyRemoveAssociationMixin<movimiento_det_pagos, movimiento_det_pagosId>;
  removeMovimientoDetPagos!: Sequelize.HasManyRemoveAssociationsMixin<movimiento_det_pagos, movimiento_det_pagosId>;
  hasMovimientoDetPago!: Sequelize.HasManyHasAssociationMixin<movimiento_det_pagos, movimiento_det_pagosId>;
  hasMovimientoDetPagos!: Sequelize.HasManyHasAssociationsMixin<movimiento_det_pagos, movimiento_det_pagosId>;
  countMovimientoDetPagos!: Sequelize.HasManyCountAssociationsMixin;
  // movimiento_cab hasMany movimiento_det_producto via movicabId
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
  // movimiento_cab belongsTo proveedor via proveedorId
  proveedor!: proveedor;
  getProveedor!: Sequelize.BelongsToGetAssociationMixin<proveedor>;
  setProveedor!: Sequelize.BelongsToSetAssociationMixin<proveedor, proveedorId>;
  createProveedor!: Sequelize.BelongsToCreateAssociationMixin<proveedor>;
  // movimiento_cab belongsTo sucursal via sucursalId
  sucursal!: sucursal;
  getSucursal!: Sequelize.BelongsToGetAssociationMixin<sucursal>;
  setSucursal!: Sequelize.BelongsToSetAssociationMixin<sucursal, sucursalId>;
  createSucursal!: Sequelize.BelongsToCreateAssociationMixin<sucursal>;
  // movimiento_cab belongsTo tipo_movimiento via tipomovId
  tipomov!: tipo_movimiento;
  getTipomov!: Sequelize.BelongsToGetAssociationMixin<tipo_movimiento>;
  setTipomov!: Sequelize.BelongsToSetAssociationMixin<tipo_movimiento, tipo_movimientoId>;
  createTipomov!: Sequelize.BelongsToCreateAssociationMixin<tipo_movimiento>;

  static initModel(sequelize: Sequelize.Sequelize): typeof movimiento_cab {
    return sequelize.define('movimiento_cab', {
    movicabId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'movicab_id'
    },
    tipomovId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipo_movimiento',
        key: 'tipomov_id'
      },
      field: 'tipomov_id'
    },
    tipomovIngEgr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'tipomov_ing_egr'
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
    secuenciaFactura: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: 'secuencia_factura'
    },
    autorizacionSri: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'autorizacion_sri'
    },
    claveAcceso: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'clave_acceso'
    },
    clienteId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cliente',
        key: 'cliente_id'
      },
      field: 'cliente_id'
    },
    puntovtaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'puntovta_id'
    },
    proveedorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'proveedor',
        key: 'proveedor_id'
      },
      field: 'proveedor_id'
    },
    estado: {
      type: DataTypes.STRING(255),
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
    tableName: 'movimiento_cab',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "movimiento_cab_pkey",
        unique: true,
        fields: [
          { name: "movicab_id" },
        ]
      },
    ]
  }) as typeof movimiento_cab;
  }
}
