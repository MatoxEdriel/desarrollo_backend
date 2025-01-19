import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { empresa, empresaId } from './empresa';
import type { pais, paisId } from './pais';

export interface ciudadAttributes {
  ciudadId: number;
  ciudadNombre?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
  paisId?: number;
}

export type ciudadPk = "ciudadId";
export type ciudadId = ciudad[ciudadPk];
export type ciudadOptionalAttributes = "ciudadId" | "ciudadNombre" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct" | "paisId";
export type ciudadCreationAttributes = Optional<ciudadAttributes, ciudadOptionalAttributes>;

export class ciudad extends Model<ciudadAttributes, ciudadCreationAttributes> implements ciudadAttributes {
  ciudadId!: number;
  ciudadNombre?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
  paisId?: number;

  // ciudad hasMany empresa via ciudadId
  empresas!: empresa[];
  getEmpresas!: Sequelize.HasManyGetAssociationsMixin<empresa>;
  setEmpresas!: Sequelize.HasManySetAssociationsMixin<empresa, empresaId>;
  addEmpresa!: Sequelize.HasManyAddAssociationMixin<empresa, empresaId>;
  addEmpresas!: Sequelize.HasManyAddAssociationsMixin<empresa, empresaId>;
  createEmpresa!: Sequelize.HasManyCreateAssociationMixin<empresa>;
  removeEmpresa!: Sequelize.HasManyRemoveAssociationMixin<empresa, empresaId>;
  removeEmpresas!: Sequelize.HasManyRemoveAssociationsMixin<empresa, empresaId>;
  hasEmpresa!: Sequelize.HasManyHasAssociationMixin<empresa, empresaId>;
  hasEmpresas!: Sequelize.HasManyHasAssociationsMixin<empresa, empresaId>;
  countEmpresas!: Sequelize.HasManyCountAssociationsMixin;
  // ciudad belongsTo pais via paisId
  pai!: pais;
  getPai!: Sequelize.BelongsToGetAssociationMixin<pais>;
  setPai!: Sequelize.BelongsToSetAssociationMixin<pais, paisId>;
  createPai!: Sequelize.BelongsToCreateAssociationMixin<pais>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ciudad {
    return sequelize.define('ciudad', {
    ciudadId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'ciudad_id'
    },
    ciudadNombre: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'ciudad_nombre'
    },
    estado: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    fechaHoraReg: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now'),
      field: 'fecha_hora_reg'
    },
    fechaHoraAct: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now'),
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
    paisId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'pais_id'
      },
      field: 'pais_id'
    }
  }, {
    tableName: 'ciudad',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "ciudad_pkey",
        unique: true,
        fields: [
          { name: "ciudad_id" },
        ]
      },
    ]
  }) as typeof ciudad;
  }
}
