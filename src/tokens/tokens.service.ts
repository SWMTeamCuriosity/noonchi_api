import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { configStt } from '../config/config.stt';

@Injectable()
export class TokensService {
  constructor(private readonly http: HttpService) {}

  async tokenGenerate() {
    const clientId = configStt.SECRET_ID;
    const clientSecret = configStt.SECRET_PASS;

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
