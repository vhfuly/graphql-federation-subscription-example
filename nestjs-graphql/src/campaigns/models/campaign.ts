import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Campaign {
    @Field()
    campaignID: string;

    @Field()
    campaign: string;

    @Field()
    active: boolean;
}
