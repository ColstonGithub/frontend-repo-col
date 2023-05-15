import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { POST_CARRIER } from "./type";

export const postCareer = createAsyncThunk(
  POST_CARRIER,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.post("api/career/create", payload);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const postCareerSlice = createSlice({
  name: "postCareerSlice",
  initialState: {
    data: {},
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postCareer.pending, (state) => {
      state.data = {};
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(postCareer.fulfilled, (state, action) => {
      state.data = action.payload?.data;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(postCareer.rejected, (state, action) => {
      state.data = {};
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default postCareerSlice.reducer;
