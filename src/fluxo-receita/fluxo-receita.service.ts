import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Encryption } from 'src/common/encryption/encryption';
import { CriarFluxoReceitaDto } from './dtos/criar-fluxo-receita.dto';
import { FluxoReceita } from './interfaces/fluxo-receita.interface';

@Injectable()
export class FluxoReceitaService {

    constructor(@InjectModel('FluxoReceita') private readonly fluxoReceitaModel: Model<FluxoReceita>) { }

    async criarFluxoReceita(criarFluxoReceitaDto: CriarFluxoReceitaDto): Promise<FluxoReceita> {
        const novoFluxoReceita = new this.fluxoReceitaModel(criarFluxoReceitaDto);
        return await novoFluxoReceita.save();
    }

    async consultarFluxoReceitaPorId(_id: string): Promise<FluxoReceita> {
        const fluxoReceitaEncontrado = await this.fluxoReceitaModel.findOne({ _id }).exec();
        if (!fluxoReceitaEncontrado) {
            throw new BadRequestException(`Fluxo de Receita com id: ${_id} não encontrado.`);
        }

        return await this.fluxoReceitaModel.findOne({ _id }).exec();
    }

    async consultarTodosFluxoReceita(): Promise<FluxoReceita[]> {
        return await this.fluxoReceitaModel.find().exec();
    }

    async deletarFluxoReceita(_id: string): Promise<any> {
        const fluxoReceitaEncontrado = await this.fluxoReceitaModel.findOne({ _id }).exec();

        if (!fluxoReceitaEncontrado) {
            throw new BadRequestException(`Fluxo de Receita com o id: ${_id} não encontrado`);
        }

        return await this.fluxoReceitaModel.deleteOne({ _id }).exec();
    }

    async atualizarFluxoReceita(_id: string, criarFluxoReceitaDto: CriarFluxoReceitaDto): Promise<void> {
        const fluxoReceitaEncontrado = await this.fluxoReceitaModel.findOne({ _id }).exec();


        if (!fluxoReceitaEncontrado) {
            throw new BadRequestException(`Fluxo de Receita com id: ${_id} não encontrado`);
        }

        await this.fluxoReceitaModel.findOneAndUpdate({ _id }, { $set: criarFluxoReceitaDto }).exec();
    }

}
