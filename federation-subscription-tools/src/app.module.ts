import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SubscriptionModule } from './subscriptions/subscriptions.module';
@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      typePaths: ['./*.gql'],
      installSubscriptionHandlers: true,
    }),
    SubscriptionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
