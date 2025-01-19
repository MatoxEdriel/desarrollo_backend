import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { modulo, moduloId } from './modulo';

export interface opcionAttributes {
  opcionId: number;
  opcionDescripcion?: string;
  estado?: number;
  fechaHoraReg?: string;
  fechaHoraAct?: string;
  usuIdReg?: number;
  usuIdAct?: number;
  moduloId?: number;
}

export type opcionPk = "opcionId";
export type opcionId = opcion[opcionPk];
export type opcionOptionalAttributes = "opcionId" | "opcionDescripcion" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct" | "moduloId";
export type opcionCreationAttributes = Optional<opcionAttributes, opcionOptionalAttributes>;

export class opcion extends Model<opcionAttributes, opcionCreationAttributes> implements opcionAttributes {
  opcionId!: number;
  opcionDescripcion?: string;
  estado?: number;
  fechaHoraReg?: string;
  fechaHoraAct?: string;
  usuIdReg?: number;
  usuIdAct?: number;
  moduloId?: number;

  // opcion belongsTo modulo via moduloId
  modulo!: modulo;
  getModulo!: Sequelize.BelongsToGetAssociationMixin<modulo>;
  setModulo!: Sequelize.BelongsToSetAssociationMixin<modulo, moduloId>;
  createModulo!: Sequelize.BelongsToCreateAssociationMixin<modulo>;

  static initModel(sequelize: Sequelize.Sequelize): typeof opcion {
    return sequelize.define('opcion', {
    opcionId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'opcion_id'
    },
    opcionDescripcion: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'opcion_descripcion'
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
    },
    moduloId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modulo',
        key: 'modulo_id'
      },
      field: 'modulo_id'
    }
  }, {
    tableName: 'opcion',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "opcion_pkey",
        unique: true,
        fields: [
          { name: "opcion_id" },
        ]
      },
    ]
  }) as typeof opcion;
  }
}
