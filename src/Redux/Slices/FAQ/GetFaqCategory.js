import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_FAQ_CATEGORY } from "./type";

export const getfaqcategory = createAsyncThunk(
  GET_FAQ_CATEGORY,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        `api/faqcategory/getfaqcategory`
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const getfaqcategorySlice = createSlice({
  name: "getfaqcategorySlice",
  initialState: {
    data: {},
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getfaqcategory.pending, (state) => {
      state.data = {};
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(getfaqcategory.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getfaqcategory.rejected, (state, action) => {
      state.data = {};
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default getfaqcategorySlice.reducer;
