import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from '../features/services/serviceSlice';
import campaignReducer from '../features/campaigns/campaignSlice';

export default configureStore({
  reducer: {
    services: serviceReducer,
    campaigns: campaignReducer,
  },
});
