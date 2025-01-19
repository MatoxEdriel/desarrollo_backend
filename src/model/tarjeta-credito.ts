import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { industria, industriaId } from './industria';

export interface tarjeta_creditoAttributes {
  tarjetaId: number;
  tarjetaDescripcion?: string;
  industriaId?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAc?: number;
}

export type tarjeta_creditoPk = "tarjetaId";
export type tarjeta_creditoId = tarjeta_credito[tarjeta_creditoPk];
export type tarjeta_creditoOptionalAttributes = "tarjetaId" | "tarjetaDescripcion" | "industriaId" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAc";
export type tarjeta_creditoCreationAttributes = Optional<tarjeta_creditoAttributes, tarjeta_creditoOptionalAttributes>;

export class tarjeta_credito extends Model<tarjeta_creditoAttributes, tarjeta_creditoCreationAttributes> implements tarjeta_creditoAttributes {
  tarjetaId!: number;
  tarjetaDescripcion?: string;
  industriaId?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAc?: number;

  // tarjeta_credito belongsTo industria via tarjetaId
  tarjetum!: industria;
  getTarjetum!: Sequelize.BelongsToGetAssociationMixin<industria>;
  setTarjetum!: Sequelize.BelongsToSetAssociationMixin<industria, industriaId>;
  createTarjetum!: Sequelize.BelongsToCreateAssociationMixin<industria>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tarjeta_credito {
    return sequelize.define('tarjeta_credito', {
    tarjetaId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'industria',
        key: 'industria_id'
      },
      field: 'tarjeta_id'
    },
    tarjetaDescripcion: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: "NULL",
      field: 'tarjeta_descripcion'
    },
    industriaId: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'industria_id'
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
    tableName: 'tarjeta_credito',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "tarjeta_credito_pkey",
        unique: true,
        fields: [
          { name: "tarjeta_id" },
        ]
      },
    ]
  }) as typeof tarjeta_credito;
  }
}
