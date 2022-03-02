import { Module } from '@nestjs/common';
import { FluxoReceitaModule } from './fluxo-receita/fluxo-receita.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://lucas_bezerra:MJ451CbLmZCnypom@cluster0.u0obv.mongodb.net/ControlPlus?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }),
    FluxoReceitaModule
  ],
})
export class AppModule { }
