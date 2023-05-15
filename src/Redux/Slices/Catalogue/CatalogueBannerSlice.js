import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_CATALOGUE_BANNER } from "./type";

export const getCatalogueBanner = createAsyncThunk(
    GET_CATALOGUE_BANNER,
    async (payload, thunkAPI) => {
      try {
        const response = await axiosInstance.post(`api/cataloguepagebanner/getcataloguepagebanners`);
        console.log("response",response.data);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: error });
      }
    }
  );

const catalogueBannerSlice = createSlice({
  name: "catalogueBannerSlice",
  initialState: {
    catalogueBanner: [],
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCatalogueBanner.pending, (state) => {
      state.catalogueBanner = [];
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(getCatalogueBanner.fulfilled, (state, action) => {
      state.catalogueBanner = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getCatalogueBanner.rejected, (state, action) => {
      state.catalogueBanner = [];
      state.isFetching = false;
      state.isError = true;
    });
  },
});


export default catalogueBannerSlice.reducer;
