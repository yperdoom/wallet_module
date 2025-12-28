import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const url = 'http://localhost'
const port = 3000;
const uri = `${url}:${port}`;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());
  const config = new DocumentBuilder()
    .setTitle('Wallet API')
    .setDescription('Documentação da API de controle financeiro')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(port, '0.0.0.0');

  console.log(`NestJS rodando com Fastify em ${uri}`);
  console.log(`Documentação swagger disponível em ${uri}/api`);
  console.log(`Para exportar a documentação, acesse ${uri}/api-json`);
}
bootstrap();
