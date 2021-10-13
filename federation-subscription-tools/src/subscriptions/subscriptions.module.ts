import { Module } from "@nestjs/common";
import { SubscriptionResolver } from "./subscriptions.resolver";

@Module({
    providers: [SubscriptionResolver]
})
export class SubscriptionModule {}