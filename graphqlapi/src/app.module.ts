import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot(
      {
        typePaths: ['./**/*.graphql'],
        // installSubscriptionHandlers: true,
        definitions: {
          path: join(process.cwd(), 'src/graphql.ts'),
        },
      }
    ),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
