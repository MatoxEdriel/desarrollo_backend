import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { producto, productoId } from './producto';

export interface categoriaAttributes {
  categoriaId: number;
  categoria?: string;
  estado?: number;
  fechaHoraReg?: string;
  usuIdReg?: number;
  fechaHoraAct?: Date;
  usuIdAct?: number;
}

export type categoriaPk = "categoriaId";
export type categoriaId = categoria[categoriaPk];
export type categoriaOptionalAttributes = "categoriaId" | "categoria" | "estado" | "fechaHoraReg" | "usuIdReg" | "fechaHoraAct" | "usuIdAct";
export type categoriaCreationAttributes = Optional<categoriaAttributes, categoriaOptionalAttributes>;

export class categoria extends Model<categoriaAttributes, categoriaCreationAttributes> implements categoriaAttributes {
  categoriaId!: number;
  categoria?: string;
  estado?: number;
  fechaHoraReg?: string;
  usuIdReg?: number;
  fechaHoraAct?: Date;
  usuIdAct?: number;

  // categoria hasMany producto via categoriaId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof categoria {
    return sequelize.define('categoria', {
    categoriaId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'categoria_id'
    },
    categoria: {
      type: DataTypes.STRING(200),
      allowNull: true
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
    usuIdReg: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'usu_id_reg'
    },
    fechaHoraAct: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'fecha_hora_act'
    },
    usuIdAct: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'usu_id_act'
    }
  }, {
    tableName: 'categoria',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "categoria_pkey",
        unique: true,
        fields: [
          { name: "categoria_id" },
        ]
      },
    ]
  }) as typeof categoria;
  }
}
