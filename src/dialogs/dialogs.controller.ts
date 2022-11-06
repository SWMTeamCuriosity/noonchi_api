import { Body, Controller, Post } from '@nestjs/common';
import { DialogsService } from './dialogs.service';

@Controller('dialogs')
export class DialogsController {
  constructor(private dialogsService: DialogsService) {}

  @Post('/')
  async queueTest(@Body() body) {
    const result = await this.dialogsService.dispatchData(body);
    return result;
  }
}
