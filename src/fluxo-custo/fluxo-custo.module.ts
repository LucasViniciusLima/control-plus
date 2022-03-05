import { Module } from '@nestjs/common';
import { FluxoCustoController } from './fluxo-custo.controller';
import { FluxoCustoService } from './fluxo-custo.service';
import { FluxoCustoSchema } from './interfaces/fluxo-custo.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'FluxoCusto', schema: FluxoCustoSchema }])],
  controllers: [FluxoCustoController],
  providers: [FluxoCustoService]
})
export class FluxoCustoModule { }
