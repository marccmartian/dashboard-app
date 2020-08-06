import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from '../features/services/serviceSlice';

export default configureStore({
  reducer: {
    services: serviceReducer,
  },
});
