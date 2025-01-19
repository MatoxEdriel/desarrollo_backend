import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ciudad, ciudadId } from './ciudad';

export interface paisAttributes {
  paisId: number;
  paisNombre?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type paisPk = "paisId";
export type paisId = pais[paisPk];
export type paisOptionalAttributes = "paisId" | "paisNombre" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type paisCreationAttributes = Optional<paisAttributes, paisOptionalAttributes>;

export class pais extends Model<paisAttributes, paisCreationAttributes> implements paisAttributes {
  paisId!: number;
  paisNombre?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // pais hasMany ciudad via paisId
  ciudads!: ciudad[];
  getCiudads!: Sequelize.HasManyGetAssociationsMixin<ciudad>;
  setCiudads!: Sequelize.HasManySetAssociationsMixin<ciudad, ciudadId>;
  addCiudad!: Sequelize.HasManyAddAssociationMixin<ciudad, ciudadId>;
  addCiudads!: Sequelize.HasManyAddAssociationsMixin<ciudad, ciudadId>;
  createCiudad!: Sequelize.HasManyCreateAssociationMixin<ciudad>;
  removeCiudad!: Sequelize.HasManyRemoveAssociationMixin<ciudad, ciudadId>;
  removeCiudads!: Sequelize.HasManyRemoveAssociationsMixin<ciudad, ciudadId>;
  hasCiudad!: Sequelize.HasManyHasAssociationMixin<ciudad, ciudadId>;
  hasCiudads!: Sequelize.HasManyHasAssociationsMixin<ciudad, ciudadId>;
  countCiudads!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof pais {
    return sequelize.define('pais', {
    paisId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'pais_id'
    },
    paisNombre: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'pais_nombre'
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
    tableName: 'pais',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "pais_pkey",
        unique: true,
        fields: [
          { name: "pais_id" },
        ]
      },
    ]
  }) as typeof pais;
  }
}
