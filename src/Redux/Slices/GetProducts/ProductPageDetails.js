import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_PRODUCT_PAGE_DETAIL } from "./type";

export const getProductPageDetail = createAsyncThunk(
  GET_PRODUCT_PAGE_DETAIL,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`api/product/${payload.id}`);
      //   console.log("response",response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const getProductPageDetailSlice = createSlice({
  name: "getProductPageDetailSlice",
  initialState: {
    data: {},
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductPageDetail.pending, (state) => {
      state.data = {};
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(getProductPageDetail.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getProductPageDetail.rejected, (state, action) => {
      state.data = {};
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default getProductPageDetailSlice.reducer;
