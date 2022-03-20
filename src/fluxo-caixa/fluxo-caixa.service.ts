import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CriarFluxoCaixaDto } from './dtos/criar-fluxo-caixa.dto';
import { FluxoCaixa } from './interfaces/fluxo-caixa.interface';

@Injectable()
export class FluxoCaixaService {

    constructor(@InjectModel('FluxoCaixa') private readonly fluxoCaixaModel: Model<FluxoCaixa>) { }

    async criarFluxoCaixa(criarFluxoCaixaDto: CriarFluxoCaixaDto): Promise<FluxoCaixa> {
        const novoFluxoCaixa = new this.fluxoCaixaModel(criarFluxoCaixaDto);
        return await novoFluxoCaixa.save();
    }

    async atualizarFluxoCaixa(_id: string, criarFluxoCaixaDto: CriarFluxoCaixaDto): Promise<void> {
        const fluxoCaixaEncontrado = await this.fluxoCaixaModel.findOne({ _id }).exec();

        if (!fluxoCaixaEncontrado) {
            throw new BadRequestException(`fluxo de caixa com id: ${_id} não encontrado`);
        }

        await this.fluxoCaixaModel.findOneAndUpdate({ _id }, { $set: criarFluxoCaixaDto }).exec();
    }

    async consultarFluxoCaixaPorId(_id: string): Promise<FluxoCaixa> {
        const fluxoCaixaEncontrado = await this.fluxoCaixaModel.findOne({ _id }).exec();

        if (!fluxoCaixaEncontrado) {
            throw new NotFoundException(`fluxo de caixa com id: ${_id} não encontrado`);
        }

        return fluxoCaixaEncontrado;
    }

    async consultarFluxosCaixa(): Promise<FluxoCaixa[]> {
        return await this.fluxoCaixaModel.find();
    }

    async deletarFluxoCaixa(_id: string): Promise<any> {
        const fluxoCaixaEncontrado = await this.fluxoCaixaModel.findOne({ _id }).exec();

        if (!fluxoCaixaEncontrado) {
            throw new BadRequestException(`fluxo de caixa com id ${_id} não encontrado`);
        }

        return await this.fluxoCaixaModel.deleteOne({ _id }).exec();
    }

    async consultarFluxoCusto(): Promise<any> {
        const fluxoCustoEncontrado = await this.fluxoCaixaModel.find({ tipo: 'C' }).exec();
        let totalPrecoCusto = 0;

        if (!fluxoCustoEncontrado) {
            throw new NotFoundException(`Nenhum fluxo de custo encontrado`);
        }

        for(let i=0;i<fluxoCustoEncontrado.length;i++){
            totalPrecoCusto += fluxoCustoEncontrado[i].preco;
        }

        return { listaCusto: fluxoCustoEncontrado, total: totalPrecoCusto };
    }

    async consultarFluxoReceita(): Promise<any> {
        const fluxoReceitaEncontrado = await this.fluxoCaixaModel.find({ tipo: 'R' }).exec();
        let totalPrecoReceitas = 0;

        if (!fluxoReceitaEncontrado) {
            throw new NotFoundException(`Nenhum fluxo de receita encontrado`);
        }

        for (let i = 0; i < fluxoReceitaEncontrado.length; i++) {
            totalPrecoReceitas += fluxoReceitaEncontrado[i].preco;
        }

        return { listaReceita: fluxoReceitaEncontrado, total: totalPrecoReceitas };
    }

}
