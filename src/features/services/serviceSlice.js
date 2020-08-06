import { createSlice } from '@reduxjs/toolkit';
import { fetchServices } from '../../app/api';

const serviceSlice = createSlice({
  name: "services",
  initialState: {
    cards: [
      {
        id: 1,
        release_date: "2020-08-05T23:35:19.666Z",
        title: "Create a site no programming skills required in 2 weeks",
        subscription_cost: 80,
        status: "live",
        total_earned: 2000,
        total_subscriptions: 25,
        total_views: 120,
        total_vacancies: 50,
        campaign_id: 1,
        created_at: "2020-08-05T23:35:19.686Z",
        updated_at: "2020-08-05T23:35:19.686Z"
      },
      {
        id: 2,
        release_date: "2020-08-05T23:35:19.694Z",
        title: "How to program without dying in the attempt",
        subscription_cost: 50,
        status: "saved",
        total_earned: 600,
        total_subscriptions: 12,
        total_views: 70,
        total_vacancies: 60,
        campaign_id: 1,
        created_at: "2020-08-05T23:35:19.695Z",
        updated_at: "2020-08-05T23:35:19.695Z"
      },
      {
        id: 3,
        release_date: "2020-08-05T23:35:19.703Z",
        title: "HTML5 from scratch",
        subscription_cost: 30,
        status: "rejected",
        total_earned: 300,
        total_subscriptions: 10,
        total_views: 400,
        total_vacancies: 50,
        campaign_id: 1,
        created_at: "2020-08-05T23:35:19.703Z",
        updated_at: "2020-08-05T23:35:19.703Z"
      }
    ]
  },
  reducers: {},
  extraReducers: {
    [fetchServices.fulfilled]: (state, action) => {
      //console.log(action.payload)
      state.cards = action.payload;
    }
  }
})

export default serviceSlice.reducer;