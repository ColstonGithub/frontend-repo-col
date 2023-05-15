import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { POST_BLOGS_BY_CATEGORY_ID } from "./type";

export const postBlogsByCategoryId = createAsyncThunk(
  POST_BLOGS_BY_CATEGORY_ID,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        "api/blogs/getblogs/categoryid",
        { id: payload }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const postBlogsByCategoryIdSlice = createSlice({
  name: "postBlogsByCategoryIdSlice",
  initialState: {
    data: {},
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postBlogsByCategoryId.pending, (state) => {
      state.data = {};
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(postBlogsByCategoryId.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(postBlogsByCategoryId.rejected, (state, action) => {
      state.data = {};
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default postBlogsByCategoryIdSlice.reducer;
