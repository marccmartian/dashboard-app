import { createSlice } from '@reduxjs/toolkit';
import { fetchServices, fetchCampaignServices } from '../../app/api';
import { format } from 'date-fns';

const serviceSlice = createSlice({
  name: "services",
  initialState: {
    selectedDate: format(new Date(), "y-MM-dd"),
    cards: []
  },
  reducers: {
    filterServicesByDate: (services, action) => {
      //services.cards = services.cards.filter(card => card.release_date.includes(action.payload))
      services.selectedDate = action.payload;
    }
  },
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

export const { filterServicesByDate } = serviceSlice.actions;

export default serviceSlice.reducer;