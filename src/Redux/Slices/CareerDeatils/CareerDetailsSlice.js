import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_CAREER_DETAILS } from "./type";

export const getCareerDetails = createAsyncThunk(
  GET_CAREER_DETAILS,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        `api/careerDetails/getCareerDetails`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const careerDetailsSlice = createSlice({
  name: "careerDetailsSlice",
  initialState: {
    careerDetails: {},
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCareerDetails.pending, (state) => {
      state.careerDetails = {};
      state.isFetching = true;
      state.isError = false;
    });
    builder.addCase(getCareerDetails.fulfilled, (state, action) => {
      state.careerDetails = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getCareerDetails.rejected, (state, action) => {
      state.careerDetails = {};
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default careerDetailsSlice.reducer;
