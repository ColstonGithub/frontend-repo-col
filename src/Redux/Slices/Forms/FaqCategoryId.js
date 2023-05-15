import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { POST_FAQ } from "./type";

export const postFaqId = createAsyncThunk(
  POST_FAQ,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        "api/faq/getfaqs/categoryid",
        { id: payload }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const postFaqIdSlice = createSlice({
  name: "postFaqIdSlice",
  initialState: {
    data: {},
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postFaqId.pending, (state) => {
      state.data = {};
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(postFaqId.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(postFaqId.rejected, (state, action) => {
      state.data = {};
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default postFaqIdSlice.reducer;
