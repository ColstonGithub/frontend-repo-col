import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_CATEGORY_PRODUCTS } from "./type";

export const getCategoryProduct = createAsyncThunk(
  GET_CATEGORY_PRODUCTS,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.post(`api/category/id/children`, {
        id: payload?.id,
      });
      //   console.log("response",response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const getCategoryProductSlice = createSlice({
  name: "getCategoryProductSlice",
  initialState: {
    brand: {},
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoryProduct.pending, (state) => {
      state.brand = {};
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(getCategoryProduct.fulfilled, (state, action) => {
      state.brand = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getCategoryProduct.rejected, (state, action) => {
      state.brand = {};
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default getCategoryProductSlice.reducer;
