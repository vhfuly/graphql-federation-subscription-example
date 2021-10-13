import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { GetCampaignArgs } from "./dto/args/get-campaign.args";
import { CreateCampaignInput } from "./dto/input/create-campaign.input";
import { DeleteCampaignInput } from "./dto/input/delete-campaign.input";

import { Campaign } from "./models/campaign";

@Injectable()
export class CampaignsService {
    private campaigns: Campaign[] = [];

    public createCampaign(createCampaignData: CreateCampaignInput): Campaign {
        const campaign: Campaign = {
            campaignID: uuidv4(),
            ...createCampaignData
        }

        this.campaigns.push(campaign);

        return campaign;
    }

    public getCampaign(getCampaignArgs: GetCampaignArgs): Campaign {
        return this.campaigns.find(campaign => campaign.campaignID === getCampaignArgs.campaignID);
    }

    public getCampaigns(): Campaign[] {
        return this.campaigns;
    }

    public deleteCampaign(deleteCampaignData: DeleteCampaignInput): Campaign {
        const campaignIndex = this.campaigns.findIndex(campaign => campaign.campaignID === deleteCampaignData.campaignID);

        const user = this.campaigns[campaignIndex];

        this.campaigns.splice(campaignIndex);

        return user;
    }
}