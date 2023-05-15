import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { POST_ABOUT_US } from "./type";

export const postAboutUs = createAsyncThunk(
  POST_ABOUT_US,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.post(`api/aboutus/getaboutus`);
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

export const PostAboutUsSlice = createSlice({
  name: "PostAboutUsSlice",
  initialState: {
    banners: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postAboutUs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postAboutUs.fulfilled, (state, action) => {
        state.loading = false;
        state.banners = action.payload;
      })
      .addCase(postAboutUs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export default PostAboutUsSlice.reducer;
