import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCampaignServices = createAsyncThunk("services/fetchCampaignServices", async (id) => {
  const response = await fetch(`http://localhost:3000/campaigns/${id}/services`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  const data = await response.json();
  return data;
});

export const fetchCampaigns = createAsyncThunk("campaign/fetchCampaigns", async () => {
  const response = await fetch(`http://localhost:3000/campaigns`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  const data = await response.json();
  return data;
});

export const fetchServices = createAsyncThunk("services/fetchServices", async () => {
  const response = await fetch('http://localhost:3000/services', {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  const data = await response.json();
  return data;
});