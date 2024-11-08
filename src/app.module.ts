import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartaoModule } from './cartao/cartao.module';

@Module({
  imports: [CartaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
