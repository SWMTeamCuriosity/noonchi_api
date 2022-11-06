import { Injectable } from '@nestjs/common';
import { ProducerService } from '../producer/producer.service';
import { configAws } from '../config/config.aws';

@Injectable()
export class DialogsService {
  constructor(private producerService: ProducerService) {}
  async dispatchData(body) {
    console.log(body);
    await this.producerService.sendMessage(body.message);
    console.log(configAws);

    return 'is it works?';
  }
}
