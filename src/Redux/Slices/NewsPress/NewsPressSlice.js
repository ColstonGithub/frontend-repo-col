import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_NEWSPRESS } from "./type";

export const getNewsPress = createAsyncThunk(
  GET_NEWSPRESS,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`api/newspress/getnewspress`);
      console.log("response",response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const newsPressSlice = createSlice({
  name: "newsPressSlice",
  initialState: {
    newsPress: [],
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNewsPress.pending, (state) => {
      state.newsPress = [];
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(getNewsPress.fulfilled, (state, action) => {
      state.newsPress = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getNewsPress.rejected, (state, action) => {
      state.newsPress = [];
      state.isFetching = false;
      state.isError = true;
    });
  },
});


export default newsPressSlice.reducer;
