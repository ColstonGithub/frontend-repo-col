import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_EXHIBITION_DETAIL } from "./type";

export const getExhibitionDetail = createAsyncThunk(
  GET_EXHIBITION_DETAIL,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        `api/exhibitionproduct/${payload.id}`
      );
      //   console.log("response",response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const exhibitionDetailSlice = createSlice({
  name: "exhibitionDetailSlice",
  initialState: {
    exhibition: {},
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getExhibitionDetail.pending, (state) => {
      state.exhibition = {};
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(getExhibitionDetail.fulfilled, (state, action) => {
      state.exhibition = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getExhibitionDetail.rejected, (state, action) => {
      state.exhibition = {};
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default exhibitionDetailSlice.reducer;
