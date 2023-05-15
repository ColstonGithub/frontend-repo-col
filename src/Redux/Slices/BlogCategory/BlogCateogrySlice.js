import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { Get_BLOGS_CATEGORY } from "./type";

export const getBlogsCategory = createAsyncThunk(
  Get_BLOGS_CATEGORY,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        `api/blogcategory/getblogcategory`
      );
      //   console.log("response",response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const blogsCategorySlice = createSlice({
  name: "blogsCategorySlice",
  initialState: {
    blogsCategory: [],
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogsCategory.pending, (state) => {
      state.blogsCategory = [];
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(getBlogsCategory.fulfilled, (state, action) => {
      state.blogsCategory = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getBlogsCategory.rejected, (state, action) => {
      state.blogsCategory = [];
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default blogsCategorySlice.reducer;
