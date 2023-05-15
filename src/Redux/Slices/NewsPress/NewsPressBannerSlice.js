import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_NEWSPRESS_BANNER } from "./type";

export const getNewsPressBanner = createAsyncThunk(
    GET_NEWSPRESS_BANNER,
    async (payload, thunkAPI) => {
      try {
        const response = await axiosInstance.post(`api/newspressbanner/getnewspressbanners`);
        console.log("response",response.data);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: error });
      }
    }
  );

const newsPressBannerSlice = createSlice({
  name: "newsPressBannerSlice",
  initialState: {
    newsPressBanner: [],
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNewsPressBanner.pending, (state) => {
      state.newsPressBanner = [];
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(getNewsPressBanner.fulfilled, (state, action) => {
      state.newsPressBanner = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getNewsPressBanner.rejected, (state, action) => {
      state.newsPressBanner = [];
      state.isFetching = false;
      state.isError = true;
    });
  },
});


export default newsPressBannerSlice.reducer;
