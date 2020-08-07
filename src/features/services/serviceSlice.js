import { createSlice } from '@reduxjs/toolkit';
import { fetchServices, fetchCampaignServices } from '../../app/api';

const serviceSlice = createSlice({
  name: "services",
  initialState: {
    cards: []
  },
  reducers: {},
  extraReducers: {
    [fetchServices.fulfilled]: (state, action) => {
      //console.log(action.payload)
      state.cards = action.payload;
    },
    [fetchCampaignServices.fulfilled]: (state, action) => {
      state.cards = action.payload;
    }
  }
})

export default serviceSlice.reducer;