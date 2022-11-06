import { Injectable } from '@nestjs/common';
import { SqsService } from '@ssut/nestjs-sqs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProducerService {
  constructor(
    private readonly sqsService: SqsService,
    private configService: ConfigService,
  ) {}

  async sendMessage(message) {
    const data = {
      id: '__default_policy_ID',
      body: { message },
      delaySeconds: 0,
    };

    try {
      await this.sqsService.send('producer', data);
    } catch (error) {
      console.log(error);
    }
  }
}
