import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { movimiento_cab, movimiento_cabId } from './movimiento-cab';
import type { producto, productoId } from './producto';

export interface movimiento_det_productoAttributes {
  movidetProdId: number;
  movicabId?: number;
  movidetId?: number;
  productoId?: number;
  cantidad?: number;
  precio?: number;
  estado?: number;
  fechaHoraReg?: string;
  fechaHoraAct?: string;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type movimiento_det_productoPk = "movidetProdId";
export type movimiento_det_productoId = movimiento_det_producto[movimiento_det_productoPk];
export type movimiento_det_productoOptionalAttributes = "movidetProdId" | "movicabId" | "movidetId" | "productoId" | "cantidad" | "precio" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type movimiento_det_productoCreationAttributes = Optional<movimiento_det_productoAttributes, movimiento_det_productoOptionalAttributes>;

export class movimiento_det_producto extends Model<movimiento_det_productoAttributes, movimiento_det_productoCreationAttributes> implements movimiento_det_productoAttributes {
  movidetProdId!: number;
  movicabId?: number;
  movidetId?: number;
  productoId?: number;
  cantidad?: number;
  precio?: number;
  estado?: number;
  fechaHoraReg?: string;
  fechaHoraAct?: string;
  usuIdReg?: number;
  usuIdAct?: number;

  // movimiento_det_producto belongsTo movimiento_cab via movicabId
  movicab!: movimiento_cab;
  getMovicab!: Sequelize.BelongsToGetAssociationMixin<movimiento_cab>;
  setMovicab!: Sequelize.BelongsToSetAssociationMixin<movimiento_cab, movimiento_cabId>;
  createMovicab!: Sequelize.BelongsToCreateAssociationMixin<movimiento_cab>;
  // movimiento_det_producto belongsTo producto via productoId
  producto!: producto;
  getProducto!: Sequelize.BelongsToGetAssociationMixin<producto>;
  setProducto!: Sequelize.BelongsToSetAssociationMixin<producto, productoId>;
  createProducto!: Sequelize.BelongsToCreateAssociationMixin<producto>;

  static initModel(sequelize: Sequelize.Sequelize): typeof movimiento_det_producto {
    return sequelize.define('movimiento_det_producto', {
    movidetProdId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'movidet_prod_id'
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
    movidetId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'movidet_id'
    },
    productoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'producto',
        key: 'prod_id'
      },
      field: 'producto_id'
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL,
      allowNull: true
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
    tableName: 'movimiento_det_producto',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "movimiento_det_producto_pkey",
        unique: true,
        fields: [
          { name: "movidet_prod_id" },
        ]
      },
    ]
  }) as typeof movimiento_det_producto;
  }
}
