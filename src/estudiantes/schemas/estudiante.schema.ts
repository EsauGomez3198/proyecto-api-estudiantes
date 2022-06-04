import * as mongoose from 'mongoose'

export const EstudianteSchema = new mongoose.Schema({
    Nombre:String,
    Direccion:String,
    Telefono:Number
})