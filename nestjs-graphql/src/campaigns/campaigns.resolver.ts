import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { GetCampaignArgs } from "./dto/args/get-campaign.args";
import { CreateCampaignInput } from "./dto/input/create-campaign.input";
import { DeleteCampaignInput } from "./dto/input/delete-campaign.input";
import { RedisService } from 'nestjs-redis';
import { Campaign } from "./models/campaign";
import { CampaignsService } from "./campaigns.service";


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
export class CampaignsResolver {
    constructor(
        private readonly campaignsService: CampaignsService,
    ) {
    }

    @Query(() => Campaign, { name: 'campaign', nullable: true })
    getCampaign(@Args() getCampaignArgs: GetCampaignArgs): Campaign {
        return this.campaignsService.getCampaign(getCampaignArgs);
    }

    @Query(() => [Campaign], { name: 'campaigns' })
    getCampaigns(): Campaign[] {
        return this.campaignsService.getCampaigns();
    }

    @Mutation(() => Campaign)
    createCampaign(@Args('createCampaignData') createCampaignData: CreateCampaignInput): Campaign {
        const newCampaign = this.campaignsService.createCampaign(createCampaignData);
        pubSub.publish('commentAdded', {commentAdded : newCampaign} );
        return newCampaign
    }

    @Mutation(() => Campaign)
    deleteCampaign(@Args('deleteCampaignData') deleteCampaignData: DeleteCampaignInput): Campaign {
        return this.campaignsService.deleteCampaign(deleteCampaignData);
    }

    // @Subscription(returns => Campaign)
    // commentAdded() {
    //   return pubSub.asyncIterator('commentAdded');
    // }
}