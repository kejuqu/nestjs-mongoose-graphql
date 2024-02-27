import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = 8081;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => {
    console.log(`server start at: http://localhost:${port} 🚀🚀🚀`);
  });
}

bootstrap();
