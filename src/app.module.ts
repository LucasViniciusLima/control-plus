import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FluxoCaixaModule } from './fluxo-caixa/fluxo-caixa.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://lucas_bezerra:MJ451CbLmZCnypom@cluster0.u0obv.mongodb.net/ControlPlus?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }),
    FluxoCaixaModule
  ],
})
export class AppModule { }
