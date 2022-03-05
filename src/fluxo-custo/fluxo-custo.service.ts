import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CriarFluxoCustoDto } from './dtos/criar-fluxo-custo.dto';
import { FluxoCusto } from './interfaces/fluxo-custo.interface';

@Injectable()
export class FluxoCustoService {

    constructor(@InjectModel('FluxoCusto') private readonly fluxoCustoModel: Model<FluxoCusto>) { }

    async criarFluxoCusto(criarFluxoCustoDto: CriarFluxoCustoDto): Promise<FluxoCusto> {
        const novoFluxoCusto = new this.fluxoCustoModel(criarFluxoCustoDto);
        return await novoFluxoCusto.save();
    }

    async atualizarFluxoCusto(_id: string, criarFluxoCustoDto: CriarFluxoCustoDto): Promise<void> {
        const fluxoCustoEncontrado = await this.fluxoCustoModel.findOne({ _id }).exec();

        if (!fluxoCustoEncontrado) {
            throw new BadRequestException(`fluxo de custo do id: ${_id} não encontrado`);
        }

        await this.fluxoCustoModel.findOneAndUpdate({ _id }, { $set: criarFluxoCustoDto }).exec();
    }

    async consultarFluxoCustoPorId(_id: string): Promise<FluxoCusto> {
        const fluxoCustoEncontrado = await this.fluxoCustoModel.findOne({ _id }).exec();

        if (!fluxoCustoEncontrado) {
            throw new NotFoundException(`fluxo de custo com id: ${_id} não encontrado`);
        }

        return fluxoCustoEncontrado;
    }

    async consultarFluxosCustos(): Promise<FluxoCusto[]> {
        return await this.fluxoCustoModel.find();
    }

    async deletarFluxoCusto(_id: string): Promise<any> {
        const fluxoCustoEncontrado = await this.fluxoCustoModel.findOne({ _id }).exec();

        if (!fluxoCustoEncontrado) {
            throw new BadRequestException(`fluxo de custo com id ${_id} não encontrado`);
        }

        return await this.fluxoCustoModel.deleteOne({ _id }).exec();
    }

}
