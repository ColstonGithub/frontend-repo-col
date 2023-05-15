import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { POST_SEARCH_FAQ } from "./type";

export const postSearchFaq = createAsyncThunk(
    POST_SEARCH_FAQ,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        `api/faq/getsearchfaq?search=${payload}`
      );
      //   console.log("response",response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const postSearchFaqSlice = createSlice({
  name: "postSearchFaqSlice",
  initialState: {
    data: {},
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postSearchFaq.pending, (state) => {
      state.data = {};
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(postSearchFaq.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(postSearchFaq.rejected, (state, action) => {
      state.data = {};
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default postSearchFaqSlice.reducer;
