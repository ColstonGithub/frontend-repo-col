import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_BLOG_DETAIL } from "./type";

export const getBlogDetail = createAsyncThunk(
  GET_BLOG_DETAIL,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`api/blogs/${payload.id}`);
    //   console.log("response",response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const blogDetailSlice = createSlice({
  name: "blogDetailSlice",
  initialState: {
    blog: {},
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogDetail.pending, (state) => {
      state.blog = [];
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(getBlogDetail.fulfilled, (state, action) => {
      state.blog = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getBlogDetail.rejected, (state, action) => {
      state.blog = [];
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default blogDetailSlice.reducer;
