import { Module } from '@nestjs/common';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { CampaignsModule } from './campaigns/campaigns.module';
import { buildFederatedSchema } from "@apollo/federation";
import { typeDefs } from './campaigns/typeDefs';
@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      schema: buildFederatedSchema([{typeDefs}]),
      debug: true,
      typePaths: ['./*.gql'],
    }),
    CampaignsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
