import { Module } from '@nestjs/common';
import { ProducerService } from './producer.service';
import * as AWS from 'aws-sdk';
import { SqsModule } from '@ssut/nestjs-sqs';
import { ConfigModule } from '@nestjs/config';
import { configAws } from '../config/config.aws';

AWS.config.update({
  region: configAws['AWS_REGION'],
  accessKeyId: configAws['AWS_CLIENT_ID'],
  secretAccessKey: configAws['AWS_SECRET_KEY'],
});

@Module({
  imports: [
    SqsModule.register({
      consumers: [],
      producers: [
        {
          name: 'producer',
          queueUrl: configAws['AWS_SQS_URL'],
          region: configAws['AWS_REGION'],
        },
      ],
    }),
    ConfigModule,
  ],
  providers: [ProducerService],
  exports: [ProducerService],
})
export class ProducerModule {}
