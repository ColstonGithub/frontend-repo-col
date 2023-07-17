import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_ORIENTATION_CENTER } from "./type";

export const getOrientationCenter = createAsyncThunk(
  GET_ORIENTATION_CENTER,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        `api/orientationCenter/getOrientationCenters`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const orientationCenterSlice = createSlice({
  name: "orientationCenterSlice",
  initialState: {
    orientationCenter: [],
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrientationCenter.pending, (state) => {
      state.orientationCenter = [];
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(getOrientationCenter.fulfilled, (state, action) => {
      state.orientationCenter = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getOrientationCenter.rejected, (state, action) => {
      state.orientationCenter = [];
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default orientationCenterSlice.reducer;
