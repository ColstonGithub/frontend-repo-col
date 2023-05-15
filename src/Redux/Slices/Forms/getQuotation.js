import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_QUOTATION } from "./type";

export const getQuotation = createAsyncThunk(
  GET_QUOTATION,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        "api/requestforquotation/create",
        { ...payload }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const getQuotationSlice = createSlice({
  name: "getQuotationSlice",
  initialState: {
    data: {},
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getQuotation.pending, (state) => {
      state.data = {};
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(getQuotation.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getQuotation.rejected, (state, action) => {
      state.data = {};
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default getQuotationSlice.reducer;
