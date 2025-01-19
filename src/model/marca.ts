import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { producto, productoId } from './producto';

export interface marcaAttributes {
  marcaId: number;
  marcaDescrip?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type marcaPk = "marcaId";
export type marcaId = marca[marcaPk];
export type marcaOptionalAttributes = "marcaId" | "marcaDescrip" | "estado" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type marcaCreationAttributes = Optional<marcaAttributes, marcaOptionalAttributes>;

export class marca extends Model<marcaAttributes, marcaCreationAttributes> implements marcaAttributes {
  marcaId!: number;
  marcaDescrip?: string;
  estado?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;

  // marca hasMany producto via marcaId
  productos!: producto[];
  getProductos!: Sequelize.HasManyGetAssociationsMixin<producto>;
  setProductos!: Sequelize.HasManySetAssociationsMixin<producto, productoId>;
  addProducto!: Sequelize.HasManyAddAssociationMixin<producto, productoId>;
  addProductos!: Sequelize.HasManyAddAssociationsMixin<producto, productoId>;
  createProducto!: Sequelize.HasManyCreateAssociationMixin<producto>;
  removeProducto!: Sequelize.HasManyRemoveAssociationMixin<producto, productoId>;
  removeProductos!: Sequelize.HasManyRemoveAssociationsMixin<producto, productoId>;
  hasProducto!: Sequelize.HasManyHasAssociationMixin<producto, productoId>;
  hasProductos!: Sequelize.HasManyHasAssociationsMixin<producto, productoId>;
  countProductos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof marca {
    return sequelize.define('marca', {
    marcaId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'marca_id'
    },
    marcaDescrip: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'marca_descrip'
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
    tableName: 'marca',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "marca_pkey",
        unique: true,
        fields: [
          { name: "marca_id" },
        ]
      },
    ]
  }) as typeof marca;
  }
}
