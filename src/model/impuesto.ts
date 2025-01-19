import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface impuestoAttributes {
  impuestoId: number;
  impuestoDescr?: string;
  impuestoValor?: number;
}

export type impuestoPk = "impuestoId";
export type impuestoId = impuesto[impuestoPk];
export type impuestoOptionalAttributes = "impuestoId" | "impuestoDescr" | "impuestoValor";
export type impuestoCreationAttributes = Optional<impuestoAttributes, impuestoOptionalAttributes>;

export class impuesto extends Model<impuestoAttributes, impuestoCreationAttributes> implements impuestoAttributes {
  impuestoId!: number;
  impuestoDescr?: string;
  impuestoValor?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof impuesto {
    return sequelize.define('impuesto', {
    impuestoId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'impuesto_id'
    },
    impuestoDescr: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'impuesto_descr'
    },
    impuestoValor: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'impuesto_valor'
    }
  }, {
    tableName: 'impuesto',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "impuesto_pkey",
        unique: true,
        fields: [
          { name: "impuesto_id" },
        ]
      },
    ]
  }) as typeof impuesto;
  }
}
