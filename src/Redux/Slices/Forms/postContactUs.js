import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { POST_CONTACT_US } from "./type";

export const postContactUs = createAsyncThunk(
  POST_CONTACT_US,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        "api/contactus/create",
        { ...payload }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const postContactUsSlice = createSlice({
  name: "postContactUsSlice",
  initialState: {
    data: {},
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postContactUs.pending, (state) => {
      state.data = {};
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(postContactUs.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(postContactUs.rejected, (state, action) => {
      state.data = {};
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default postContactUsSlice.reducer;
