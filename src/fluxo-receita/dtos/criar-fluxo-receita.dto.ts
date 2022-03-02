import { IsDateString, IsNotEmpty } from "class-validator";


export class CriarFluxoReceitaDto {
    @IsNotEmpty()
    @IsDateString()
    readonly data: Date;

    @IsNotEmpty()
    readonly preco: number;

    @IsNotEmpty()
    readonly nome: string;
}