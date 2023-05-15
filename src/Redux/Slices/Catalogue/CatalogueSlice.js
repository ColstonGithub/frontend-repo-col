import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_CATALOGUE } from "./type";

export const getCatalogue = createAsyncThunk(
  GET_CATALOGUE,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`api/catalogue/getcatalogue`);
      console.log("response",response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const catalogueSlice = createSlice({
  name: "catalogueSlice",
  initialState: {
    catalogue: [],
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCatalogue.pending, (state) => {
      state.catalogue = [];
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(getCatalogue.fulfilled, (state, action) => {
      state.catalogue = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getCatalogue.rejected, (state, action) => {
      state.catalogue = [];
      state.isFetching = false;
      state.isError = true;
    });
  },
});


export default catalogueSlice.reducer;
