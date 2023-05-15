import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_CARE_CLEAN } from "./type";

export const getCareClean = createAsyncThunk(
  GET_CARE_CLEAN,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.post(`api/careclean/getcarecleans`);
      console.log("response",response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const careCleanSlice = createSlice({
  name: "careCleanSlice",
  initialState: {
    careClean: {},
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCareClean.pending, (state) => {
      state.careClean = {};
      state.isFetching = true;
      state.isError = false;
    });
    builder.addCase(getCareClean.fulfilled, (state, action) => {
      state.careClean = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getCareClean.rejected, (state, action) => {
      state.careClean = {};
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default careCleanSlice.reducer;
