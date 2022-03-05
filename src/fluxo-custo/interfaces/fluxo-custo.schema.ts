import * as mongoose from 'mongoose';


export const FluxoCustoSchema = new mongoose.Schema({
    preco: Number,
    data: Date,
    nome: String,
    tipo: Number
    
}, {timestamps: true, collection: 'FluxoCusto' });