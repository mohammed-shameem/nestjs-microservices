import { Test, TestingModule } from '@nestjs/testing';
import { UserClientService } from './user-client.service';

describe('UserClientService', () => {
  let service: UserClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserClientService],
    }).compile();

    service = module.get<UserClientService>(UserClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
