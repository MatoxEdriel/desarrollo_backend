import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { forma_pago, forma_pagoId } from './forma-pago';
import type { movimiento_cab, movimiento_cabId } from './movimiento-cab';

export interface movimiento_det_pagosAttributes {
  movidetPagoId: number;
  movicabId?: number;
  fpagoId?: number;
  valorPagado?: number;
  industriaId?: number;
  lote?: string[];
  voucher?: string;
  tarjetacredId?: number;
  bancoId?: number;
  comprobanteId?: number;
  fechaPago?: string;
  clienteId?: number;
}

export type movimiento_det_pagosPk = "movidetPagoId";
export type movimiento_det_pagosId = movimiento_det_pagos[movimiento_det_pagosPk];
export type movimiento_det_pagosOptionalAttributes = "movidetPagoId" | "movicabId" | "fpagoId" | "valorPagado" | "industriaId" | "lote" | "voucher" | "tarjetacredId" | "bancoId" | "comprobanteId" | "fechaPago" | "clienteId";
export type movimiento_det_pagosCreationAttributes = Optional<movimiento_det_pagosAttributes, movimiento_det_pagosOptionalAttributes>;

export class movimiento_det_pagos extends Model<movimiento_det_pagosAttributes, movimiento_det_pagosCreationAttributes> implements movimiento_det_pagosAttributes {
  movidetPagoId!: number;
  movicabId?: number;
  fpagoId?: number;
  valorPagado?: number;
  industriaId?: number;
  lote?: string[];
  voucher?: string;
  tarjetacredId?: number;
  bancoId?: number;
  comprobanteId?: number;
  fechaPago?: string;
  clienteId?: number;

  // movimiento_det_pagos belongsTo forma_pago via fpagoId
  fpago!: forma_pago;
  getFpago!: Sequelize.BelongsToGetAssociationMixin<forma_pago>;
  setFpago!: Sequelize.BelongsToSetAssociationMixin<forma_pago, forma_pagoId>;
  createFpago!: Sequelize.BelongsToCreateAssociationMixin<forma_pago>;
  // movimiento_det_pagos belongsTo movimiento_cab via movicabId
  movicab!: movimiento_cab;
  getMovicab!: Sequelize.BelongsToGetAssociationMixin<movimiento_cab>;
  setMovicab!: Sequelize.BelongsToSetAssociationMixin<movimiento_cab, movimiento_cabId>;
  createMovicab!: Sequelize.BelongsToCreateAssociationMixin<movimiento_cab>;

  static initModel(sequelize: Sequelize.Sequelize): typeof movimiento_det_pagos {
    return sequelize.define('movimiento_det_pagos', {
    movidetPagoId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'movidet_pago_id'
    },
    movicabId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'movimiento_cab',
        key: 'movicab_id'
      },
      field: 'movicab_id'
    },
    fpagoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'forma_pago',
        key: 'fpago_id'
      },
      field: 'fpago_id'
    },
    valorPagado: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'valor_pagado'
    },
    industriaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'industria_id'
    },
    lote: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    voucher: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tarjetacredId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'tarjetacred_id'
    },
    bancoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'banco_id'
    },
    comprobanteId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'comprobante_id'
    },
    fechaPago: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fecha_pago'
    },
    clienteId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'cliente_id'
    }
  }, {
    tableName: 'movimiento_det_pagos',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "movimiento_det_pagos_pkey",
        unique: true,
        fields: [
          { name: "movidet_pago_id" },
        ]
      },
    ]
  }) as typeof movimiento_det_pagos;
  }
}
