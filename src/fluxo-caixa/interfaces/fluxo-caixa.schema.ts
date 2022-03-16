import * as mongoose from 'mongoose';

export const FluxoCaixaSchema = new mongoose.Schema({
    preco: Number,
    data: Date,
    nome: String,
    tipo: String
    
}, {timestamps: true, collection: 'FluxoCaixa' });