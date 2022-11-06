import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';
import { configAws } from './config/config.aws';
import { getMainCommentOfNode } from '@nestjs/swagger/dist/plugin/utils/ast-utils';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = 3000 || process.env.PORT;

  app.useLogger(app.get(Logger));

  const config = new DocumentBuilder()
    .setTitle('Noonchi API')
    .setDescription(
      'Voice Phishing Detecotr Noonchi API Server' +
        'Token Generateor and Login Process, Data Processing api are included',
    )
    .setVersion('v0.1')
    .addCookieAuth('connect.sid')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  console.log(configAws.AWS_CLIENT_ID);
  console.log(`API Listening on ${port}`);
  await app.listen(port);
}

bootstrap();
