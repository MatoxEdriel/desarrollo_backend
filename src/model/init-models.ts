import type { Sequelize } from "sequelize";
import { categoria as _categoria } from "./categoria";
import type { categoriaAttributes, categoriaCreationAttributes } from "./categoria";
import { ciudad as _ciudad } from "./ciudad";
import type { ciudadAttributes, ciudadCreationAttributes } from "./ciudad";
import { cliente as _cliente } from "./cliente";
import type { clienteAttributes, clienteCreationAttributes } from "./cliente";
import { empresa as _empresa } from "./empresa";
import type { empresaAttributes, empresaCreationAttributes } from "./empresa";
import { forma_pago as _forma_pago } from "./forma-pago";
import type { forma_pagoAttributes, forma_pagoCreationAttributes } from "./forma-pago";
import { impuesto as _impuesto } from "./impuesto";
import type { impuestoAttributes, impuestoCreationAttributes } from "./impuesto";
import { industria as _industria } from "./industria";
import type { industriaAttributes, industriaCreationAttributes } from "./industria";
import { marca as _marca } from "./marca";
import type { marcaAttributes, marcaCreationAttributes } from "./marca";
import { modulo as _modulo } from "./modulo";
import type { moduloAttributes, moduloCreationAttributes } from "./modulo";
import { movimiento_cab as _movimiento_cab } from "./movimiento-cab";
import type { movimiento_cabAttributes, movimiento_cabCreationAttributes } from "./movimiento-cab";
import { movimiento_det_pagos as _movimiento_det_pagos } from "./movimiento-det-pagos";
import type { movimiento_det_pagosAttributes, movimiento_det_pagosCreationAttributes } from "./movimiento-det-pagos";
import { movimiento_det_producto as _movimiento_det_producto } from "./movimiento-det-producto";
import type { movimiento_det_productoAttributes, movimiento_det_productoCreationAttributes } from "./movimiento-det-producto";
import { opcion as _opcion } from "./opcion";
import type { opcionAttributes, opcionCreationAttributes } from "./opcion";
import { pais as _pais } from "./pais";
import type { paisAttributes, paisCreationAttributes } from "./pais";
import { producto as _producto } from "./producto";
import type { productoAttributes, productoCreationAttributes } from "./producto";
import { proveedor as _proveedor } from "./proveedor";
import type { proveedorAttributes, proveedorCreationAttributes } from "./proveedor";
import { punto_emision_sri as _punto_emision_sri } from "./punto-emision-sri";
import type { punto_emision_sriAttributes, punto_emision_sriCreationAttributes } from "./punto-emision-sri";
import { rol as _rol } from "./rol";
import type { rolAttributes, rolCreationAttributes } from "./rol";
import { stock as _stock } from "./stock";
import type { stockAttributes, stockCreationAttributes } from "./stock";
import { sucursal as _sucursal } from "./sucursal";
import type { sucursalAttributes, sucursalCreationAttributes } from "./sucursal";
import { tarjeta_credito as _tarjeta_credito } from "./tarjeta-credito";
import type { tarjeta_creditoAttributes, tarjeta_creditoCreationAttributes } from "./tarjeta-credito";
import { tipo_movimiento as _tipo_movimiento } from "./tipo-movimiento";
import type { tipo_movimientoAttributes, tipo_movimientoCreationAttributes } from "./tipo-movimiento";
import { usuario as _usuario } from "./usuario";
import type { usuarioAttributes, usuarioCreationAttributes } from "./usuario";
import { usuario_permiso as _usuario_permiso } from "./usuario-permiso";
import type { usuario_permisoAttributes, usuario_permisoCreationAttributes } from "./usuario-permiso";
import { usuario_rol as _usuario_rol } from "./usuario-rol";
import type { usuario_rolAttributes, usuario_rolCreationAttributes } from "./usuario-rol";

export {
  _categoria as categoria,
  _ciudad as ciudad,
  _cliente as cliente,
  _empresa as empresa,
  _forma_pago as forma_pago,
  _impuesto as impuesto,
  _industria as industria,
  _marca as marca,
  _modulo as modulo,
  _movimiento_cab as movimiento_cab,
  _movimiento_det_pagos as movimiento_det_pagos,
  _movimiento_det_producto as movimiento_det_producto,
  _opcion as opcion,
  _pais as pais,
  _producto as producto,
  _proveedor as proveedor,
  _punto_emision_sri as punto_emision_sri,
  _rol as rol,
  _stock as stock,
  _sucursal as sucursal,
  _tarjeta_credito as tarjeta_credito,
  _tipo_movimiento as tipo_movimiento,
  _usuario as usuario,
  _usuario_permiso as usuario_permiso,
  _usuario_rol as usuario_rol,
};

export type {
  categoriaAttributes,
  categoriaCreationAttributes,
  ciudadAttributes,
  ciudadCreationAttributes,
  clienteAttributes,
  clienteCreationAttributes,
  empresaAttributes,
  empresaCreationAttributes,
  forma_pagoAttributes,
  forma_pagoCreationAttributes,
  impuestoAttributes,
  impuestoCreationAttributes,
  industriaAttributes,
  industriaCreationAttributes,
  marcaAttributes,
  marcaCreationAttributes,
  moduloAttributes,
  moduloCreationAttributes,
  movimiento_cabAttributes,
  movimiento_cabCreationAttributes,
  movimiento_det_pagosAttributes,
  movimiento_det_pagosCreationAttributes,
  movimiento_det_productoAttributes,
  movimiento_det_productoCreationAttributes,
  opcionAttributes,
  opcionCreationAttributes,
  paisAttributes,
  paisCreationAttributes,
  productoAttributes,
  productoCreationAttributes,
  proveedorAttributes,
  proveedorCreationAttributes,
  punto_emision_sriAttributes,
  punto_emision_sriCreationAttributes,
  rolAttributes,
  rolCreationAttributes,
  stockAttributes,
  stockCreationAttributes,
  sucursalAttributes,
  sucursalCreationAttributes,
  tarjeta_creditoAttributes,
  tarjeta_creditoCreationAttributes,
  tipo_movimientoAttributes,
  tipo_movimientoCreationAttributes,
  usuarioAttributes,
  usuarioCreationAttributes,
  usuario_permisoAttributes,
  usuario_permisoCreationAttributes,
  usuario_rolAttributes,
  usuario_rolCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const categoria = _categoria.initModel(sequelize);
  const ciudad = _ciudad.initModel(sequelize);
  const cliente = _cliente.initModel(sequelize);
  const empresa = _empresa.initModel(sequelize);
  const forma_pago = _forma_pago.initModel(sequelize);
  const impuesto = _impuesto.initModel(sequelize);
  const industria = _industria.initModel(sequelize);
  const marca = _marca.initModel(sequelize);
  const modulo = _modulo.initModel(sequelize);
  const movimiento_cab = _movimiento_cab.initModel(sequelize);
  const movimiento_det_pagos = _movimiento_det_pagos.initModel(sequelize);
  const movimiento_det_producto = _movimiento_det_producto.initModel(sequelize);
  const opcion = _opcion.initModel(sequelize);
  const pais = _pais.initModel(sequelize);
  const producto = _producto.initModel(sequelize);
  const proveedor = _proveedor.initModel(sequelize);
  const punto_emision_sri = _punto_emision_sri.initModel(sequelize);
  const rol = _rol.initModel(sequelize);
  const stock = _stock.initModel(sequelize);
  const sucursal = _sucursal.initModel(sequelize);
  const tarjeta_credito = _tarjeta_credito.initModel(sequelize);
  const tipo_movimiento = _tipo_movimiento.initModel(sequelize);
  const usuario = _usuario.initModel(sequelize);
  const usuario_permiso = _usuario_permiso.initModel(sequelize);
  const usuario_rol = _usuario_rol.initModel(sequelize);

  producto.belongsTo(categoria, { as: "categorium", foreignKey: "categoriaId"});
  categoria.hasMany(producto, { as: "productos", foreignKey: "categoriaId"});
  empresa.belongsTo(ciudad, { as: "ciudad", foreignKey: "ciudadId"});
  ciudad.hasMany(empresa, { as: "empresas", foreignKey: "ciudadId"});
  movimiento_cab.belongsTo(cliente, { as: "cliente", foreignKey: "clienteId"});
  cliente.hasMany(movimiento_cab, { as: "movimientoCabs", foreignKey: "clienteId"});
  movimiento_cab.belongsTo(empresa, { as: "empresa", foreignKey: "empresaId"});
  empresa.hasMany(movimiento_cab, { as: "movimientoCabs", foreignKey: "empresaId"});
  punto_emision_sri.belongsTo(empresa, { as: "empresa", foreignKey: "empresaId"});
  empresa.hasMany(punto_emision_sri, { as: "puntoEmisionSris", foreignKey: "empresaId"});
  stock.belongsTo(empresa, { as: "empresa", foreignKey: "empresaId"});
  empresa.hasMany(stock, { as: "stocks", foreignKey: "empresaId"});
  movimiento_det_pagos.belongsTo(forma_pago, { as: "fpago", foreignKey: "fpagoId"});
  forma_pago.hasMany(movimiento_det_pagos, { as: "movimientoDetPagos", foreignKey: "fpagoId"});
  tarjeta_credito.belongsTo(industria, { as: "tarjetum", foreignKey: "tarjetaId"});
  industria.hasOne(tarjeta_credito, { as: "tarjetaCredito", foreignKey: "tarjetaId"});
  producto.belongsTo(marca, { as: "marca", foreignKey: "marcaId"});
  marca.hasMany(producto, { as: "productos", foreignKey: "marcaId"});
  opcion.belongsTo(modulo, { as: "modulo", foreignKey: "moduloId"});
  modulo.hasMany(opcion, { as: "opcions", foreignKey: "moduloId"});
  movimiento_det_pagos.belongsTo(movimiento_cab, { as: "movicab", foreignKey: "movicabId"});
  movimiento_cab.hasMany(movimiento_det_pagos, { as: "movimientoDetPagos", foreignKey: "movicabId"});
  movimiento_det_producto.belongsTo(movimiento_cab, { as: "movicab", foreignKey: "movicabId"});
  movimiento_cab.hasMany(movimiento_det_producto, { as: "movimientoDetProductos", foreignKey: "movicabId"});
  ciudad.belongsTo(pais, { as: "pai", foreignKey: "paisId"});
  pais.hasMany(ciudad, { as: "ciudads", foreignKey: "paisId"});
  movimiento_det_producto.belongsTo(producto, { as: "producto", foreignKey: "productoId"});
  producto.hasMany(movimiento_det_producto, { as: "movimientoDetProductos", foreignKey: "productoId"});
  stock.belongsTo(producto, { as: "prod", foreignKey: "prodId"});
  producto.hasMany(stock, { as: "stocks", foreignKey: "prodId"});
  movimiento_cab.belongsTo(proveedor, { as: "proveedor", foreignKey: "proveedorId"});
  proveedor.hasMany(movimiento_cab, { as: "movimientoCabs", foreignKey: "proveedorId"});
  movimiento_cab.belongsTo(sucursal, { as: "sucursal", foreignKey: "sucursalId"});
  sucursal.hasMany(movimiento_cab, { as: "movimientoCabs", foreignKey: "sucursalId"});
  stock.belongsTo(sucursal, { as: "sucursal", foreignKey: "sucursalId"});
  sucursal.hasMany(stock, { as: "stocks", foreignKey: "sucursalId"});
  movimiento_cab.belongsTo(tipo_movimiento, { as: "tipomov", foreignKey: "tipomovId"});
  tipo_movimiento.hasMany(movimiento_cab, { as: "movimientoCabs", foreignKey: "tipomovId"});

  return {
    categoria: categoria,
    ciudad: ciudad,
    cliente: cliente,
    empresa: empresa,
    forma_pago: forma_pago,
    impuesto: impuesto,
    industria: industria,
    marca: marca,
    modulo: modulo,
    movimiento_cab: movimiento_cab,
    movimiento_det_pagos: movimiento_det_pagos,
    movimiento_det_producto: movimiento_det_producto,
    opcion: opcion,
    pais: pais,
    producto: producto,
    proveedor: proveedor,
    punto_emision_sri: punto_emision_sri,
    rol: rol,
    stock: stock,
    sucursal: sucursal,
    tarjeta_credito: tarjeta_credito,
    tipo_movimiento: tipo_movimiento,
    usuario: usuario,
    usuario_permiso: usuario_permiso,
    usuario_rol: usuario_rol,
  };
}
