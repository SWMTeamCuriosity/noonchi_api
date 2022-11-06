import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokensModule } from './tokens/tokens.module';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { ProducerModule } from './producer/producer.module';
import { DialogsService } from './dialogs/dialogs.service';
import { DialogsController } from './dialogs/dialogs.controller';
import { DialogsModule } from './dialogs/dialogs.module';

@Module({
  imports: [
    TokensModule,
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
        },
      },
    }),
    ProducerModule,
    DialogsModule,
  ],
  controllers: [AppController, DialogsController],
  providers: [AppService, DialogsService],
})
export class AppModule {}
