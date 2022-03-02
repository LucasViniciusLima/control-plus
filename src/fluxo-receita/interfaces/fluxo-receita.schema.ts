import * as mongoose from 'mongoose';

export const FluxoReceitaSchema = new mongoose.Schema({
    data: Date,
    nome: String,
    preco: Number
}, { timestamps: true, collection: 'FluxoReceita' });
