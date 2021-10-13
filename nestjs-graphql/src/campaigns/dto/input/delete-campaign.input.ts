import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class DeleteCampaignInput {
    @Field()
    @IsNotEmpty()
    campaignID: string;
}