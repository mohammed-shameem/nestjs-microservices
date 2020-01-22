import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/common/enums/transport.enum';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: { 
      urls: [`amqp://rabbitmq:rabbitmq@rabbitmq:5672`],
      queue: 'my_queue',
      queueOptions: { durable: false },
    }
  });
  console.log("hello")
  await app.listen(4200);
}
bootstrap();
