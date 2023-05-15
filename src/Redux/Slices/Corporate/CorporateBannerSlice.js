import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_CORPORATE_BANNER } from "./type";

export const getCorporateBanner = createAsyncThunk(
    GET_CORPORATE_BANNER,
    async (payload, thunkAPI) => {
      try {
        const response = await axiosInstance.post(`api/corporatepagebanner/getcorporatepagebanners`);
        console.log("response",response.data);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: error });
      }
    }
  );

const corporateBannerSlice = createSlice({
  name: "corporateBannerSlice",
  initialState: {
    corporateBanner: [],
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCorporateBanner.pending, (state) => {
      state.corporateBanner = [];
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(getCorporateBanner.fulfilled, (state, action) => {
      state.corporateBanner = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getCorporateBanner.rejected, (state, action) => {
      state.corporateBanner = [];
      state.isFetching = false;
      state.isError = true;
    });
  },
});


export default corporateBannerSlice.reducer;
