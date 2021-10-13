import { Module } from "@nestjs/common";
import { CampaignsResolver } from "./campaigns.resolver";
import { CampaignsService } from "./campaigns.service";
import { RedisModule } from "nestjs-redis";

@Module({
    imports:[RedisModule],
    providers: [CampaignsResolver, CampaignsService]
})
export class CampaignsModule {}