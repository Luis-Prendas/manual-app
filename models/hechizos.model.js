import { Schema, model, models } from "mongoose";

const hechizoSchema = new Schema(
  {
    name: { type: String, require: true },
    coste: { type: String, require: true },
    requisito: { type: String, require: true },
    alcance: { type: String, require: true },
    valor: { type: String, require: true },
    desc: { type: String, require: true },
    alma: { type: String, require: true },
    accion: { type: String, require: true },
    nota: { type: String },
  },
  {
    timestamps: true,
  }
);

const Hechizo = models.Hechizo || model("Hechizo", hechizoSchema);

export default Hechizo;
