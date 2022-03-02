import { Controller, Post, Get, Body, UsePipes, ValidationPipe, Param, Put, Delete } from '@nestjs/common';
import { CriarFluxoReceitaDto } from './dtos/criar-fluxo-receita.dto';
import { FluxoReceitaService } from './fluxo-receita.service';
import { ValidacaoParametrosPipe } from 'src/common/pipes/validacao-parametros.pipe';
import { FluxoReceita } from './interfaces/fluxo-receita.interface';

@Controller('api/v1/fluxo-receita')
export class FluxoReceitaController {

    constructor(private readonly fluxoReceitaService: FluxoReceitaService) { }

    @Post()
    @UsePipes(ValidationPipe)
    async criarFluxoReceita(@Body() criarFluxoReceitaDto: CriarFluxoReceitaDto): Promise<FluxoReceita> {
        return await this.fluxoReceitaService.criarFluxoReceita(criarFluxoReceitaDto);
    }

    @Get('/:_id')
    async consultarFluxoReceitaPorId(@Param('_id', ValidacaoParametrosPipe) _id: string): Promise<FluxoReceita> {
        return await this.fluxoReceitaService.consultarFluxoReceitaPorId(_id);
    }

    @Get()
    async consultarFluxosReceitas(): Promise<FluxoReceita[]> {
        return await this.fluxoReceitaService.consultarTodosFluxoReceita();
    }

    @Put('/:_id')
    async atualizarFluxoReceita(
        @Param('_id', ValidacaoParametrosPipe) _id: string,
        @Body() criarFluxoReceitaDto: CriarFluxoReceitaDto): Promise<void> {
        return await this.fluxoReceitaService.atualizarFluxoReceita(_id, criarFluxoReceitaDto);
    }

    @Delete('/:_id')
    async deletarFluxoReceita(@Param('_id', ValidacaoParametrosPipe) _id: string): Promise<any> {
        return await this.fluxoReceitaService.deletarFluxoReceita(_id);
    }
}
