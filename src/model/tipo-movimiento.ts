import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { movimiento_cab, movimiento_cabId } from './movimiento-cab';

export interface tipo_movimientoAttributes {
  tipomovId: number;
  tipomovDescrip: string;
  tipomovIngEgr: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAc?: number;
}

export type tipo_movimientoPk = "tipomovId";
export type tipo_movimientoId = tipo_movimiento[tipo_movimientoPk];
export type tipo_movimientoOptionalAttributes = "tipomovId" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAc";
export type tipo_movimientoCreationAttributes = Optional<tipo_movimientoAttributes, tipo_movimientoOptionalAttributes>;

export class tipo_movimiento extends Model<tipo_movimientoAttributes, tipo_movimientoCreationAttributes> implements tipo_movimientoAttributes {
  tipomovId!: number;
  tipomovDescrip!: string;
  tipomovIngEgr!: number;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAc?: number;

  // tipo_movimiento hasMany movimiento_cab via tipomovId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof tipo_movimiento {
    return sequelize.define('tipo_movimiento', {
    tipomovId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'tipomov_id'
    },
    tipomovDescrip: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'tipomov_descrip'
    },
    tipomovIngEgr: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      field: 'tipomov_ing_egr'
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
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'usu_id_reg'
    },
    usuIdAc: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'usu_id_ac'
    }
  }, {
    tableName: 'tipo_movimiento',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "tipo_movimiento_pkey",
        unique: true,
        fields: [
          { name: "tipomov_id" },
        ]
      },
    ]
  }) as typeof tipo_movimiento;
  }
}
