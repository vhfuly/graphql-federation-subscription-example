import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@ArgsType()
export class GetCampaignArgs {
    @Field()
    @IsNotEmpty()
    campaignID: string;
}