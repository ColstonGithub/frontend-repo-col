import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { POST_PRODUCT_PAGE } from "./type";

export const postProductPage = createAsyncThunk(
  POST_PRODUCT_PAGE,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        "api/product/getProducts/categoryid",
        { id: payload.id }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const postProductPageSlice = createSlice({
  name: "postProductPageSlice",
  initialState: {
    data: {},
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postProductPage.pending, (state) => {
      state.data = {};
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(postProductPage.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(postProductPage.rejected, (state, action) => {
      state.data = {};
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default postProductPageSlice.reducer;
