import { Injectable } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { User } from '../graphql';
@Injectable()
export class UserClientService {
    @Client({
        transport: Transport.RMQ,
        options: { 
          urls: [`amqp://rabbitmq:rabbitmq@rabbitmq:5672`],
          queue: 'my_queue',
          queueOptions: { durable: false }
        }
    })
    client: ClientProxy;

    public  getUsers(): Promise<User[]> {
        console.log(1111)
        return this.client.send<any[]>(
          { type: 'get-users' },
          { someImaginaryParams: 42 }
        ).toPromise()
    }
}
