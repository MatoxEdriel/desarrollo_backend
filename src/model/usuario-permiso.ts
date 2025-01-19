import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface usuario_permisoAttributes {
  permisoId: number;
  moduloId?: number;
  opcionId?: number;
  usuId?: number;
  estadoPermiso?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;
}

export type usuario_permisoPk = "permisoId";
export type usuario_permisoId = usuario_permiso[usuario_permisoPk];
export type usuario_permisoOptionalAttributes = "permisoId" | "moduloId" | "opcionId" | "usuId" | "estadoPermiso" | "fechaHoraReg" | "fechaHoraAct" | "usuIdReg" | "usuIdAct";
export type usuario_permisoCreationAttributes = Optional<usuario_permisoAttributes, usuario_permisoOptionalAttributes>;

export class usuario_permiso extends Model<usuario_permisoAttributes, usuario_permisoCreationAttributes> implements usuario_permisoAttributes {
  permisoId!: number;
  moduloId?: number;
  opcionId?: number;
  usuId?: number;
  estadoPermiso?: number;
  fechaHoraReg?: Date;
  fechaHoraAct?: Date;
  usuIdReg?: number;
  usuIdAct?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof usuario_permiso {
    return sequelize.define('usuario_permiso', {
    permisoId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'permiso_id'
    },
    moduloId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'modulo_id'
    },
    opcionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'opcion_id'
    },
    usuId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'usu_id'
    },
    estadoPermiso: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'estado_permiso'
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
    tableName: 'usuario_permiso',
    schema: 'retail',
    timestamps: false,
    indexes: [
      {
        name: "usuario_permiso_pkey",
        unique: true,
        fields: [
          { name: "permiso_id" },
        ]
      },
    ]
  }) as typeof usuario_permiso;
  }
}
