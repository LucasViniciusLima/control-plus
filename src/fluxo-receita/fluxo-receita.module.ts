import { Module } from '@nestjs/common';
import { FluxoReceitaService } from './fluxo-receita.service';
import { FluxoReceitaController } from './fluxo-receita.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FluxoReceitaSchema } from './interfaces/fluxo-receita.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'FluxoReceita', schema: FluxoReceitaSchema }])],
    controllers: [FluxoReceitaController],
    providers: [FluxoReceitaService]
})
export class FluxoReceitaModule { }
