import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ValidacaoParametrosPipe } from 'src/common/pipes/validacao-parametros.pipe';
import { CriarFluxoCaixaDto } from './dtos/criar-fluxo-caixa.dto';
import { FluxoCaixaService } from './fluxo-caixa.service';
import { FluxoCaixa } from './interfaces/fluxo-caixa.interface';

@Controller('api/v1/fluxo-caixa')
export class FluxoCaixaController {

    constructor(private readonly fluxoCaixaService: FluxoCaixaService) { }

    @Post()
    @UsePipes(ValidationPipe)
    async criarFluxoCusto(@Body() criarFluxoCaixaDto: CriarFluxoCaixaDto): Promise<FluxoCaixa> {
        return await this.fluxoCaixaService.criarFluxoCaixa(criarFluxoCaixaDto);
    }

    @Get()
    async consultarFluxosCustos(): Promise<FluxoCaixa[]> {
        return await this.fluxoCaixaService.consultarFluxosCaixa();
    }

    @Get('/:_id')
    async consultarFluxoCustoPorId(@Param('_id', ValidacaoParametrosPipe) _id: string): Promise<FluxoCaixa> {
        return await this.fluxoCaixaService.consultarFluxoCaixaPorId(_id);
    }

    @Put('/:_id')
    async atualizarFluxoCusto(
        @Param('_id', ValidacaoParametrosPipe) _id: string,
        @Body() criarFluxoCaixaDto: CriarFluxoCaixaDto): Promise<void> {
        return await this.fluxoCaixaService.atualizarFluxoCaixa(_id, criarFluxoCaixaDto);
    }

    @Delete('/:_id')
    async deletarFluxoCusto(@Param('_id', ValidacaoParametrosPipe) _id: string): Promise<any> {
        return await this.fluxoCaixaService.deletarFluxoCaixa(_id);
    }
}
