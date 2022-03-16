import { Module } from '@nestjs/common';
import { FluxoCaixaController } from './fluxo-caixa.controller';
import { FluxoCaixaService } from './fluxo-caixa.service';
import { FluxoCaixaSchema } from './interfaces/fluxo-caixa.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'FluxoCaixa', schema: FluxoCaixaSchema }])],
  controllers: [FluxoCaixaController],
  providers: [FluxoCaixaService]
})
export class FluxoCaixaModule { }
