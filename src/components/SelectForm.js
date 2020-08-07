import React, { useEffect } from 'react'
import styled from '@emotion/styled';
import { fetchCampaigns, fetchCampaignServices, fetchServices } from '../app/api'
import { useDispatch, useSelector } from 'react-redux';


const SelectCampaign = styled.select`
  width: 200px;
`;

export const SelectForm = () => {
  const dispatch = useDispatch();
  const campaigns = useSelector(state => state.campaigns.items);

  useEffect(() => {
    dispatch(fetchCampaigns());
  }, []);

  const handleChange = (event) => {
    const campaign_id = event.target.value;
    if (campaign_id === "all") {
      dispatch(fetchServices());
    } else {
      dispatch(fetchCampaignServices(campaign_id));
    }
  }

  return (
    <form>
      <SelectCampaign onChange={handleChange}>
        <option value="all">All Campaigns</option>
        {
          campaigns.map(campaign => <option key={campaign.id} value={campaign.id}>{campaign.title}</option>)
        }
      </SelectCampaign>

    </form>
  )
}