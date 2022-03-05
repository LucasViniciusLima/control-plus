import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ValidacaoParametrosPipe } from 'src/common/pipes/validacao-parametros.pipe';
import { CriarFluxoCustoDto } from './dtos/criar-fluxo-custo.dto';
import { FluxoCustoService } from './fluxo-custo.service';
import { FluxoCusto } from './interfaces/fluxo-custo.interface';

@Controller('api/v1/fluxo-custo')
export class FluxoCustoController {

    constructor(private readonly fluxoCustoService: FluxoCustoService) { }

    @Post()
    @UsePipes(ValidationPipe)
    async criarFluxoCusto(@Body() criarFluxoCustoDto: CriarFluxoCustoDto): Promise<FluxoCusto> {
        return await this.fluxoCustoService.criarFluxoCusto(criarFluxoCustoDto);
    }

    @Get()
    async consultarFluxosCustos(): Promise<FluxoCusto[]> {
        return await this.fluxoCustoService.consultarFluxosCustos();
    }

    @Get('/:_id')
    async consultarFluxoCustoPorId(@Param('_id', ValidacaoParametrosPipe) _id: string): Promise<FluxoCusto> {
        return await this.fluxoCustoService.consultarFluxoCustoPorId(_id);
    }

    @Put('/:_id')
    async atualizarFluxoCusto(
        @Param('_id', ValidacaoParametrosPipe) _id: string,
        @Body() criarFluxoCustoDto: CriarFluxoCustoDto): Promise<void> {
        return await this.fluxoCustoService.atualizarFluxoCusto(_id, criarFluxoCustoDto);
    }

    @Delete('/:_id')
    async deletarFluxoCusto(@Param('_id', ValidacaoParametrosPipe) _id: string): Promise<any> {
        return await this.fluxoCustoService.deletarFluxoCusto(_id);
    }
}
