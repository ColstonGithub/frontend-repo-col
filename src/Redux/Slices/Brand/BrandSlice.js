import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_BRAND_PRODUCTS } from "./type";

export const getBrandProducts = createAsyncThunk(
  GET_BRAND_PRODUCTS,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`api/brandproduct/getbrandproducts`);
      console.log("response",response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const brandSlice = createSlice({
  name: "brandSlice",
  initialState: {
    brandProducts: [],
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBrandProducts.pending, (state) => {
      state.brandProducts = [];
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(getBrandProducts.fulfilled, (state, action) => {
      state.brandProducts = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getBrandProducts.rejected, (state, action) => {
      state.brandProducts = [];
      state.isFetching = false;
      state.isError = true;
    });
  },
});


export default brandSlice.reducer;
