import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { movimiento_cab, movimiento_cabId } from './movimiento-cab';

export interface proveedorAttributes {
  proveedorId: number;
  provRuc?: string;
  provNomComercial?: string;
  provRazon?: string;
  provDireccion?: string;
  provTelefono?: number;
  ciudadId?: number;
  estado?: string;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type proveedorPk = "proveedorId";
export type proveedorId = proveedor[proveedorPk];
export type proveedorOptionalAttributes = "proveedorId" | "provRuc" | "provNomComercial" | "provRazon" | "provDireccion" | "provTelefono" | "ciudadId" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type proveedorCreationAttributes = Optional<proveedorAttributes, proveedorOptionalAttributes>;

export class proveedor extends Model<proveedorAttributes, proveedorCreationAttributes> implements proveedorAttributes {
  proveedorId!: number;
  provRuc?: string;
  provNomComercial?: string;
  provRazon?: string;
  provDireccion?: string;
  provTelefono?: number;
  ciudadId?: number;
  estado?: string;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // proveedor hasMany movimiento_cab via proveedorId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof proveedor {
    return sequelize.define('proveedor', {
    proveedorId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'proveedor_id'
    },
    provRuc: {
      type: DataTypes.STRING(13),
      allowNull: true,
      field: 'prov_ruc'
    },
    provNomComercial: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'prov_nom_comercial'
    },
    provRazon: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'prov_razon'
    },
    provDireccion: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'prov_direccion'
    },
    provTelefono: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'prov_telefono'
    },
    ciudadId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'ciudad_id'
    },
    estado: {
      type: DataTypes.STRING(255),
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
    }
  }, {
    tableName: 'proveedor',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "proveedor_pkey",
        unique: true,
        fields: [
          { name: "proveedor_id" },
        ]
      },
    ]
  }) as typeof proveedor;
  }
}
