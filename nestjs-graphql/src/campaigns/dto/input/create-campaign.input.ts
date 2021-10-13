import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateCampaignInput {
    @Field()
    @IsNotEmpty()
    campaign: string;

    @Field()
    @IsNotEmpty()
    active: boolean;
}