import { Resolver, Subscription } from "@nestjs/graphql";
import { Campaign } from "./models/campaign";


import { RedisPubSub } from "graphql-redis-subscriptions";
import Redis from "ioredis";

const redis = new Redis(
  6379,
  'redis://127.0.0.1',
);

const pubSub = new RedisPubSub({
  publisher: redis,
  subscriber: redis
});

@Resolver(() => Campaign)
export class SubscriptionResolver {
    @Subscription(returns => Campaign)
    commentAdded() {
      return pubSub.asyncIterator('commentAdded');
    }
}