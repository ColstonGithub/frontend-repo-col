import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_BLOGS } from "./type";

export const getBlogs = createAsyncThunk(
  GET_BLOGS,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`api/blogs/getblogs`);
    //   console.log("response",response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const blogsSlice = createSlice({
  name: "blogsSlice",
  initialState: {
    blogs: [],
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogs.pending, (state) => {
      state.blogs = [];
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getBlogs.rejected, (state, action) => {
      state.blogs = [];
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default blogsSlice.reducer;
