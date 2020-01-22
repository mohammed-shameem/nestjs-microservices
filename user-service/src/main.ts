import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://rabbitmq:rabbitmq@rabbitmq:5672`],
      queue: 'my_queue',
      queueOptions: { durable: false },
    }
  });
  app.listen(() => console.log('Microservice is listening'));
}

bootstrap();
