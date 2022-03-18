import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CriarFluxoCaixaDto {
    @IsDateString()
    readonly data: Date;

    @IsString()
    readonly tipo: string;

    @IsNotEmpty()    
    readonly nome: string;

    @IsNotEmpty()
    @IsNumber()
    readonly preco: number;
}