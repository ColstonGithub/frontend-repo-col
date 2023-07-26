import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "services/AxiosInstance";
import { GET_EXHIBITION_PRODUCTS } from "./type";

export const getExhibitionProducts = createAsyncThunk(
    GET_EXHIBITION_PRODUCTS,
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`api/exhibitionproduct/getexhibitionproducts`);
      console.log("response",response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

const exhibitionProductSlice = createSlice({
  name: "exhibitionProductSlice",
  initialState: {
    exhibitionProducts: [],
    error: "",
    isFetching: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getExhibitionProducts.pending, (state) => {
      state.exhibitionProducts = [];
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(getExhibitionProducts.fulfilled, (state, action) => {
      state.exhibitionProducts = action.payload;
      state.isFetching = false;
      state.isError = false;
    });
    builder.addCase(getExhibitionProducts.rejected, (state, action) => {
      state.exhibitionProducts = [];
      state.isFetching = false;
      state.isError = true;
    });
  },
});


export default exhibitionProductSlice.reducer;
