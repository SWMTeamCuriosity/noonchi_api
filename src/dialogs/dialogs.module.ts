import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProducerModule } from '../producer/producer.module';

@Module({
  imports: [ConfigModule, ProducerModule],
})
export class DialogsModule {}
