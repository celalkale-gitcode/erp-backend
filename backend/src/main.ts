import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });

  app.enableCors();

  // 🔥 EN KRİTİK EKLEME
  app.useGlobalFilters(new AllExceptionsFilter());

  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');

  console.log(`🚀 Server running on port ${port}`);
}
bootstrap();

