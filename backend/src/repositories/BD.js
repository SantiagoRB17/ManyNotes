import mongoose from "mongoose";
import { getRequiredVar } from "../utils/env.js";


export const connectMongoDB = () => {
  const MONGO_URI = getRequiredVar("MONGO_URI");

  try {
    console.log("Intentando conexion a base de datos mongo.")
    mongoose.connect(MONGO_URI);
    console.log("Conectado exitosamente brother.")
  } catch (e) {
    console.error(`Error conectando a DB: ${e.message}.`)
  }
}
