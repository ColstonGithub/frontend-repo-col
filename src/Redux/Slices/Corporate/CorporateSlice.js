import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_CORPORATE_PRODUCTS } from "./type";

export const getCorporateProducts = createAsyncThunk(
  GET_CORPORATE_PRODUCTS,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`api/corporateproduct/getcorporateproducts`);
      console.log("response",response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const corporateSlice = createSlice({
  name: "corporateSlice",
  initialState: {
    corporateProducts: [],
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCorporateProducts.pending, (state) => {
      state.corporateProducts = [];
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(getCorporateProducts.fulfilled, (state, action) => {
      state.corporateProducts = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getCorporateProducts.rejected, (state, action) => {
      state.corporateProducts = [];
      state.isFetching = false;
      state.isError = true;
    });
  },
});


export default corporateSlice.reducer;
