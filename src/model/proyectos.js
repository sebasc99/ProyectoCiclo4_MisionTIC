const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { composeWithMongoose } = require("graphql-compose-mongoose");
const inscripcionSchema = new Schema(
  {
    idestudiante: String,
    estado: String,
    fechaingreso: Date,
    fechasalida: Date
  }
);
const AvanceSchema = new Schema(
  {
    idestudiante: String,
    fechaAvance: Date,
    descripcionAvance: String,
    obsLider: String
  }
);
const proyectosSchema = new Schema(

  {
    nombreProyecto: String,
    objetivosGenerales: String,
    objetivosEspecificos: String,
    documentolider: String,
    nombrelider: String,
    estadoproyecto: String,
    faseProyecto: String,
    fechadeinicio: String,
    fechadeterminacion: String,
    Avances: [AvanceSchema],
    inscripciones: [inscripcionSchema]

  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = {
    proyectosSchema: mongoose.model("proyectos", proyectosSchema),
  proyectosTC: composeWithMongoose(mongoose.model("proyectos", proyectosSchema)),
};





















