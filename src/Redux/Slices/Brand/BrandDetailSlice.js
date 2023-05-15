import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_BRAND_DETAIL } from "./type";

export const getBrandDetail = createAsyncThunk(
  GET_BRAND_DETAIL,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`api/brandproduct/${payload.id}`);
    //   console.log("response",response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const brandDetailSlice = createSlice({
  name: "brandDetailSlice",
  initialState: {
    brand: {},
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBrandDetail.pending, (state) => {
      state.brand = {};
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(getBrandDetail.fulfilled, (state, action) => {
      state.brand = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getBrandDetail.rejected, (state, action) => {
      state.brand = {};
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default brandDetailSlice.reducer;
