import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        transformAutoSchemaFile: true,
        cors: true,
      },

      gateway: {
        serviceList: [
          { name: 'campaigns', url: 'http://localhost:3000/graphql' },
        ],
      },
    }),
  ],
})
export class AppModule {}
