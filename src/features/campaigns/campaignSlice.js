import { createSlice } from '@reduxjs/toolkit';
import { fetchCampaigns } from '../../app/api';

const campaignSlice = createSlice({
  name: "campaigns",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetchCampaigns.fulfilled]: (state, action) => {
      state.items = action.payload;
    }
  },
});

export default campaignSlice.reducer;