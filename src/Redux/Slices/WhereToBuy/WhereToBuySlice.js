import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import {
  WHERE_TO_BUY_DATA,
  WHERE_TO_BUY_DETAIL_PAGE,
  WHERE_TO_BUY_FILTER_DATA,
} from "./type";

export const getWhereToBuyData = createAsyncThunk(
  WHERE_TO_BUY_DATA,
  async (thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        `api/whereToBuy/getWhereToBuyCenters`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);
export const getWhereToBuyFilterData = createAsyncThunk(
  WHERE_TO_BUY_FILTER_DATA,
  async (selectedCity, thunkAPI) => {
    try {
      console.log("selectedCity ", selectedCity);
      const response = await axiosInstance.post(
        `api/whereToBuy/getFilterWhereToBuyByCity`,
        { selectedCity }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const whereToBuyDetail = createAsyncThunk(
  WHERE_TO_BUY_DETAIL_PAGE,
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`api/whereToBuy/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const whereToBuySlice = createSlice({
  name: "whereToBuySlice",
  initialState: {
    getWhereToBuyListData: [],
    getWhereToBuyData: [],
    getWhereToBuyFilterData: [],
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWhereToBuyData.pending, (state) => {
      state.getWhereToBuyListData = [];
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(getWhereToBuyData.fulfilled, (state, action) => {
      state.getWhereToBuyListData = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getWhereToBuyData.rejected, (state, action) => {
      state.getWhereToBuyListData = [];
      state.isFetching = false;
      state.isError = true;
    });
    //
    builder.addCase(whereToBuyDetail.pending, (state) => {
      state.getWhereToBuyData = [];
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(whereToBuyDetail.fulfilled, (state, action) => {
      state.getWhereToBuyData = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(whereToBuyDetail.rejected, (state, action) => {
      state.getWhereToBuyData = [];
      state.isFetching = false;
      state.isError = true;
    });
    //
    builder.addCase(getWhereToBuyFilterData.pending, (state) => {
      state.getWhereToBuyFilterData = [];
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(getWhereToBuyFilterData.fulfilled, (state, action) => {
      state.getWhereToBuyFilterData = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getWhereToBuyFilterData.rejected, (state, action) => {
      state.getWhereToBuyFilterData = [];
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default whereToBuySlice.reducer;
