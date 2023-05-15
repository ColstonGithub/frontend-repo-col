import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { POST_NEW_ARRIVAL } from "./type";

export const postNewArrival = createAsyncThunk(
  POST_NEW_ARRIVAL,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.post(`api/product/getnewarrival`);
      // console.log("response", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const PostNewArrivalSlice = createSlice({
  name: "PostNewArrivalSlice",
  initialState: {
    banners: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postNewArrival.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postNewArrival.fulfilled, (state, action) => {
        state.loading = false;
        state.banners = action.payload;
      })
      .addCase(postNewArrival.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export default PostNewArrivalSlice.reducer;
