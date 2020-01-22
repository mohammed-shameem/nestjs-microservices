import { Resolver, Query } from '@nestjs/graphql';
import { UserClientService } from './user-client.service';
import { User } from '../graphql';

@Resolver('User')
export class UserResolver {

    constructor(private readonly userClientService: UserClientService ) {}
    @Query()
    public getUsers(): Promise<User[]> {
        return this.userClientService.getUsers();
    }
}