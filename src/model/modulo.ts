import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { opcion, opcionId } from './opcion';

export interface moduloAttributes {
  moduloId: number;
  moduloDescripcion?: string;
  estado?: number;
  fechaHoraReg?: string;
  fechaHoraAct?: string;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type moduloPk = "moduloId";
export type moduloId = modulo[moduloPk];
export type moduloOptionalAttributes = "moduloId" | "moduloDescripcion" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type moduloCreationAttributes = Optional<moduloAttributes, moduloOptionalAttributes>;

export class modulo extends Model<moduloAttributes, moduloCreationAttributes> implements moduloAttributes {
  moduloId!: number;
  moduloDescripcion?: string;
  estado?: number;
  fechaHoraReg?: string;
  fechaHoraAct?: string;
  usuIdReg?: number;
  usuIdAct?: number;

  // modulo hasMany opcion via moduloId
  opcions!: opcion[];
  getOpcions!: Sequelize.HasManyGetAssociationsMixin<opcion>;
  setOpcions!: Sequelize.HasManySetAssociationsMixin<opcion, opcionId>;
  addOpcion!: Sequelize.HasManyAddAssociationMixin<opcion, opcionId>;
  addOpcions!: Sequelize.HasManyAddAssociationsMixin<opcion, opcionId>;
  createOpcion!: Sequelize.HasManyCreateAssociationMixin<opcion>;
  removeOpcion!: Sequelize.HasManyRemoveAssociationMixin<opcion, opcionId>;
  removeOpcions!: Sequelize.HasManyRemoveAssociationsMixin<opcion, opcionId>;
  hasOpcion!: Sequelize.HasManyHasAssociationMixin<opcion, opcionId>;
  hasOpcions!: Sequelize.HasManyHasAssociationsMixin<opcion, opcionId>;
  countOpcions!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof modulo {
    return sequelize.define('modulo', {
    moduloId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'modulo_id'
    },
    moduloDescripcion: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'modulo_descripcion'
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
    tableName: 'modulo',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "modulo_pkey",
        unique: true,
        fields: [
          { name: "modulo_id" },
        ]
      },
    ]
  }) as typeof modulo;
  }
}
