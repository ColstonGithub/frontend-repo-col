import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_VIRTUAL_TOUR } from "./type";

export const getVirtualTour = createAsyncThunk(
  GET_VIRTUAL_TOUR,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.post(`api/virtualtour/getvirtualtours`);
      console.log("response",response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const virtualTourSlice = createSlice({
  name: "virtualTourSlice",
  initialState: {
    virtualTour: {},
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVirtualTour.pending, (state) => {
      state.virtualTour = {};
      state.isFetching = true;
      state.isError = false;
    });
    builder.addCase(getVirtualTour.fulfilled, (state, action) => {
      state.virtualTour = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getVirtualTour.rejected, (state, action) => {
      state.virtualTour = {};
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default virtualTourSlice.reducer;
