import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { movimiento_cab, movimiento_cabId } from './movimiento-cab';

export interface clienteAttributes {
  clienteId: number;
  clienteRuc?: string;
  clienteNombre1?: string;
  clienteNombre2?: string;
  clienteApellido1?: string;
  clienteApellido2?: string;
  clienteEmail?: string;
  clienteTelefono?: string;
  clienteDireccion?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type clientePk = "clienteId";
export type clienteId = cliente[clientePk];
export type clienteOptionalAttributes = "clienteId" | "clienteRuc" | "clienteNombre1" | "clienteNombre2" | "clienteApellido1" | "clienteApellido2" | "clienteEmail" | "clienteTelefono" | "clienteDireccion" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type clienteCreationAttributes = Optional<clienteAttributes, clienteOptionalAttributes>;

export class cliente extends Model<clienteAttributes, clienteCreationAttributes> implements clienteAttributes {
  clienteId!: number;
  clienteRuc?: string;
  clienteNombre1?: string;
  clienteNombre2?: string;
  clienteApellido1?: string;
  clienteApellido2?: string;
  clienteEmail?: string;
  clienteTelefono?: string;
  clienteDireccion?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // cliente hasMany movimiento_cab via clienteId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof cliente {
    return sequelize.define('cliente', {
    clienteId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'cliente_id'
    },
    clienteRuc: {
      type: DataTypes.STRING(13),
      allowNull: true,
      field: 'cliente_ruc'
    },
    clienteNombre1: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'cliente_nombre1'
    },
    clienteNombre2: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'cliente_nombre2'
    },
    clienteApellido1: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'cliente_apellido1'
    },
    clienteApellido2: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'cliente_apellido2'
    },
    clienteEmail: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'cliente_email'
    },
    clienteTelefono: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'cliente_telefono'
    },
    clienteDireccion: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'cliente_direccion'
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
    tableName: 'cliente',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "cliente_pkey",
        unique: true,
        fields: [
          { name: "cliente_id" },
        ]
      },
    ]
  }) as typeof cliente;
  }
}
