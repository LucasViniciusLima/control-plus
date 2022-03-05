import { Document } from 'mongoose';

export interface FluxoCusto extends Document{
    nome: string;
    preco: number;
    tipo: number;
    data: Date;
}