import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { POST_CORPORATE_BANNER } from "./type";

export const postCorporateBanners = createAsyncThunk(
  POST_CORPORATE_BANNER,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        `api/corporatepagebanner/getcorporatepagebanners`
      );
      // console.log("response", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

// const HomePageBannerSlice = createSlice({
//   name: "HomePageBannerSlice",
//   initialState: {
//     getMenuOptionsData: [],
//     error: "",
//     isFetching: false,
//     isError: false,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(postHomepageBanner.pending, (state) => {
//       state.getMenuOptionsData = [];
//       state.isFetching = true;
//       state.isError = false;
//     });

//     builder.addCase(postHomepageBanner.fulfilled, (state, action) => {
//       state.getMenuOptionsData = action.payload;
//       state.isFetching = false;
//       state.isError = false;
//     });
//     builder.addCase(postHomepageBanner.rejected, (state, action) => {
//       state.getMenuOptionsData = [];
//       state.isFetching = false;
//       state.isError = true;
//     });
//   },
// });

export const PostCorporateBannersSlice = createSlice({
  name: "PostCorporateBannersSlice",
  initialState: {
    banners: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postCorporateBanners.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postCorporateBanners.fulfilled, (state, action) => {
        state.loading = false;
        state.banners = action.payload;
      })
      .addCase(postCorporateBanners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export default PostCorporateBannersSlice.reducer;
