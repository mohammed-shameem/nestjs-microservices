import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserClientService } from './user-client.service';

@Module({
  providers: [UserResolver, UserClientService]
})
export class UserModule {}
