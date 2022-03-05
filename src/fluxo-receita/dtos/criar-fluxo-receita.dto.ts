import { IsDateString, IsNotEmpty, IsNumber } from "class-validator";


export class CriarFluxoReceitaDto {
    @IsNotEmpty()
    @IsDateString()
    readonly data: Date;

    @IsNotEmpty()
    @IsNumber()
    readonly preco: number;

    @IsNotEmpty()
    readonly nome: string;
}