import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { movimiento_det_pagos, movimiento_det_pagosId } from './movimiento-det-pagos';

export interface forma_pagoAttributes {
  fpagoId: number;
  fpagoDescripcion?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type forma_pagoPk = "fpagoId";
export type forma_pagoId = forma_pago[forma_pagoPk];
export type forma_pagoOptionalAttributes = "fpagoId" | "fpagoDescripcion" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type forma_pagoCreationAttributes = Optional<forma_pagoAttributes, forma_pagoOptionalAttributes>;

export class forma_pago extends Model<forma_pagoAttributes, forma_pagoCreationAttributes> implements forma_pagoAttributes {
  fpagoId!: number;
  fpagoDescripcion?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // forma_pago hasMany movimiento_det_pagos via fpagoId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof forma_pago {
    return sequelize.define('forma_pago', {
    fpagoId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'fpago_id'
    },
    fpagoDescripcion: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'fpago_descripcion'
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
    tableName: 'forma_pago',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "forma_pago_pkey",
        unique: true,
        fields: [
          { name: "fpago_id" },
        ]
      },
    ]
  }) as typeof forma_pago;
  }
}
