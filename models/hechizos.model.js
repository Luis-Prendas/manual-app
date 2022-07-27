import { Schema, model, models } from "mongoose";

const hechizoSchema = new Schema(
  {
    name: { type: String, require: true, unique: true },
    slug: { type: String, require: true, unique: true },
    coste: { type: String, require: true },
    requisito: { type: String, require: true },
    alcance: { type: String, require: true },
    valor: { type: String, require: true },
    desc: { type: String, require: true },
    nota: { type: String },
    alma: { type: String, require: true, enum: ["Azul", "Blanca", "Negra", "prueba"] },
  },
  {
    timestamps: true,
  }
);

const Hechizo = models.Hechizo || model("Hechizo", hechizoSchema);

export default Hechizo;