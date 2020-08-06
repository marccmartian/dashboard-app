import { createAsyncThunk } from '@reduxjs/toolkit';

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