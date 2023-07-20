import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { POST_WARANTY_REGISTRATION } from "./type";

export const postWarrantyRegisteration = createAsyncThunk(
  POST_WARANTY_REGISTRATION,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        "api/warrentyregistration/create",
        payload
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const postWarrantyRegisterationSlice = createSlice({
  name: "postWarrantyRegisterationSlice",
  initialState: {
    data: {},
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postWarrantyRegisteration.pending, (state) => {
      state.data = {};
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(postWarrantyRegisteration.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(postWarrantyRegisteration.rejected, (state, action) => {
      state.data = {};
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default postWarrantyRegisterationSlice.reducer;
