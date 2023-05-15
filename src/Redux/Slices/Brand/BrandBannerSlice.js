import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_BRAND_BANNER } from "./type";

export const getBrandBanner = createAsyncThunk(
    GET_BRAND_BANNER,
    async (payload, thunkAPI) => {
      try {
        const response = await axiosInstance.post(`api/brandpagebanner/getbrandpagebanners`);
        console.log("response",response.data);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: error });
      }
    }
  );

const brandBannerSlice = createSlice({
  name: "brandBannerSlice",
  initialState: {
    brandBanner: [],
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBrandBanner.pending, (state) => {
      state.brandBanner = [];
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(getBrandBanner.fulfilled, (state, action) => {
      state.brandBanner = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getBrandBanner.rejected, (state, action) => {
      state.brandBanner = [];
      state.isFetching = false;
      state.isError = true;
    });
  },
});


export default brandBannerSlice.reducer;
