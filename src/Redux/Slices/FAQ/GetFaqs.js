import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_FAQS } from "./type";

export const getFaqs = createAsyncThunk(GET_FAQS, async (payload, thunkAPI) => {
  try {
    const response = await axiosInstance.post(`api/faq/getfaqs`);
    console.log("faqs", response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error });
  }
});

const getFaqsSlice = createSlice({
  name: "getFaqsSlice",
  initialState: {
    data: {},
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFaqs.pending, (state) => {
      state.faqs = [];
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(getFaqs.fulfilled, (state, action) => {
      state.faqs = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getFaqs.rejected, (state, action) => {
      state.faqs = [];
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default getFaqsSlice.reducer;
