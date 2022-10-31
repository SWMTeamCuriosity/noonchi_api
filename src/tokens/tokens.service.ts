import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs';

@Injectable()
export class TokensService {
  constructor(
    private readonly http: HttpService,
    private configService: ConfigService,
  ) {}

  async tokenGenerate() {
    const clientId = this.configService.get('VITO_CLIENT_ID');
    const clientSecret = this.configService.get('VITO_CLIENT_SECRET');

    return this.http
      .post('https://openapi.vito.ai/v1/authenticate', {
        clientId,
        clientSecret,
      })
      .pipe(
        map((res) => {
          return res.data;
        }),
      );
  }
}
