import { Schema, model, models } from "mongoose";

const meritoSchema = new Schema(
  {
    name: { type: String, require: true },
    coste: { type: String, require: true },
    desc: { type: String, require: true },
    nota: { type: String },
  },
  {
    timestamps: true,
  }
);

const Merito = models.Merito || model("Merito", meritoSchema);

export default Merito;
