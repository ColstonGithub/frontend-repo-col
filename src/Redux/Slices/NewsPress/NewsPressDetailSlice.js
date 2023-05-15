import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_NEWSPRESS_DETAIL } from "./type";

export const getNewsPressDetail = createAsyncThunk(
  GET_NEWSPRESS_DETAIL,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`api/newspress/${payload.id}`);
    //   console.log("response",response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const newsPressDetailSlice = createSlice({
  name: "newsPressDetailSlice",
  initialState: {
    newsDetail: {},
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNewsPressDetail.pending, (state) => {
      state.newsDetail = {};
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(getNewsPressDetail.fulfilled, (state, action) => {
      state.newsDetail = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getNewsPressDetail.rejected, (state, action) => {
      state.newsDetail = {};
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default newsPressDetailSlice.reducer;
