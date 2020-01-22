import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Observable, of } from 'rxjs';

@Controller('user')
export class UserController {
    @MessagePattern({ type: 'get-users' })
    public getCatalogItems(): Observable<{}[]> {
        console.log(222)

    return of([
        {
            id: '1',
            name: 'Mohammed',
            role: 'Developer',
            hourlyPrice: 100
        },
        {
            id: '1',
            name: 'Shameem',
            role: 'Consultant',
            hourlyPrice: 150
        }
    ])};
}
