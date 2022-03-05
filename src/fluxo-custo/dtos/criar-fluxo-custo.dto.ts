import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CriarFluxoCustoDto {
    @IsDateString()
    readonly data: Date;

    @IsNotEmpty()
    @IsNumber()
    readonly tipo: number;

    @IsNotEmpty()    
    readonly nome: string;

    @IsNotEmpty()
    @IsNumber()
    readonly preco: number;
}