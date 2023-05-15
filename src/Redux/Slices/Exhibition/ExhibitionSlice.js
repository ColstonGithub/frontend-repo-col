import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_EXHIBITION } from "./type";

export const getExhibition = createAsyncThunk(
  GET_EXHIBITION,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.post(`api/exhibition/getexhibitions`);
      console.log("response",response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const exhibitionSlice = createSlice({
  name: "exhibitionSlice",
  initialState: {
    exhibition: {},
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getExhibition.pending, (state) => {
      state.exhibition = {};
      state.isFetching = true;
      state.isError = false;
    });
    builder.addCase(getExhibition.fulfilled, (state, action) => {
      state.exhibition = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getExhibition.rejected, (state, action) => {
      state.exhibition = {};
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default exhibitionSlice.reducer;
