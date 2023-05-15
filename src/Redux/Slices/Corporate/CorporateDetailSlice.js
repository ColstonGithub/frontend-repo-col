import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_CORPORATE_DETAIL } from "./type";

export const getCorporateDetail = createAsyncThunk(
  GET_CORPORATE_DETAIL,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`api/corporateproduct/${payload.id}`);
    //   console.log("response",response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const corporateDetailSlice = createSlice({
  name: "corporateDetailSlice",
  initialState: {
    corporate: {},
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCorporateDetail.pending, (state) => {
      state.corporate = {};
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(getCorporateDetail.fulfilled, (state, action) => {
      state.corporate = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getCorporateDetail.rejected, (state, action) => {
      state.corporate = {};
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default corporateDetailSlice.reducer;
