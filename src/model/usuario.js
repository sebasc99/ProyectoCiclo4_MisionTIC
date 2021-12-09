const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { composeWithMongoose } = require("graphql-compose-mongoose");

const AvanceSchema = new Schema(
  {
    
    fechaAvance: String,
    descripcionAvance: String,
    obsLider: String
  }
);

const UsuarioSchema = new Schema(
  {
    correo: String,
    documento: String,
    nombre: String,
    psw: String,
    rol: String,
    estado: String
  }
);

module.exports = {
  UsuarioSchema: mongoose.model("usuarios", UsuarioSchema),
  UsuarioTC: composeWithMongoose(mongoose.model("usuarios", UsuarioSchema)),
};
