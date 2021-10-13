
import { gql } from 'apollo-server';

export const typeDefs = gql`
type Campaign {
  campaignID: String!
  campaign: String!
  active: Boolean!
}

type Query {
  campaign(campaignID: String!): Campaign
  campaigns: [Campaign!]!
}

type Mutation {
  createCampaign(createCampaignData: CreateCampaignInput!): Campaign!
  deleteCampaign(deleteCampaignData: DeleteCampaignInput!): Campaign!
}

input CreateCampaignInput {
  campaign: String!
  active: Boolean!
}

input DeleteCampaignInput {
  campaignID: String!
}

# type Subscription {
#   commentAdded: Campaign!
# }
`;