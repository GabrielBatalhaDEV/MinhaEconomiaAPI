import { Module } from '@nestjs/common';
import { CartaoService } from './cartao.service';
import { CartaoController } from './cartao.controller';
import { DatabaseModule } from 'src/database/database.module';
import { cartaoProviders } from './providers/cartao.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CartaoController],
  providers: [CartaoService, ...cartaoProviders],
})
export class CartaoModule {}
