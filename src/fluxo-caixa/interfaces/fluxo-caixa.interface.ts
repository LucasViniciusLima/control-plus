import { Document } from 'mongoose';

export interface FluxoCaixa extends Document{
    nome: string;
    preco: number;
    tipo: string;
    data: Date;
}