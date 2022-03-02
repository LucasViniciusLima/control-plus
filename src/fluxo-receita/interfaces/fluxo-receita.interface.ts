import { Document } from 'mongoose';

export interface FluxoReceita extends Document{
    data: Date;
    nome: string;
    preco: number;
}