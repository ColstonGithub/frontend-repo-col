import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_INITIAL_IMAGES } from "./type";

export const getInitialImages = createAsyncThunk(
  GET_INITIAL_IMAGES,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        `api/initialImage/getInitialImages`
      );
       console.log("response ss", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const InitialImagesSlice = createSlice({
  name: "InitialImagesSlice",
  initialState: {
    initialImages: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInitialImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getInitialImages.fulfilled, (state, action) => {
        state.loading = false;
        state.initialImages = action.payload;
      })
      .addCase(getInitialImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export default InitialImagesSlice.reducer;
