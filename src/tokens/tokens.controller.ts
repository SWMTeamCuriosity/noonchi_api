import { Controller, Get } from '@nestjs/common';
import { TokensService } from './tokens.service';

@Controller('tokens')
export class TokensController {
  constructor(private tokensService: TokensService) {}
  @Get()
  async getToken() {
    return this.tokensService.tokenGenerate();
  }
}
