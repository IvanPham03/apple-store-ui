import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../../api/axiosInstance";

export const fetchData = createAsyncThunk("featured/fetchIphones", async () => {
  try {
    console.log("fetch");
    // Fetch dữ liệu từ nhiều endpoint
    const [iphoneResp, macResp] = await Promise.all([
      AxiosInstance.get("/product?category=iphone")
    ]);
    // console.log(iphoneResp + "_______________");
    const iphone = iphoneResp.data;
    // console.log(iphone + "-------------------");
    return { iphone: iphone };
  } catch (error) {}
});

const featuredSlice = createSlice({
  name: "featured",
  initialState: {
    iphone: null,
    macbook: null,
    ipad: null,
    airpod: null,
    watch: null,
    status: "fail",
    loading: false,
    error: null
  },
  reducers: {
    addIphone(state, action) {
      state.iphone = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchData.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.iphone = action.payload.iphone;
      // state.macbook = action.payload.macbook;
      // state.ipad = action.payload.ipad;
      // state.airpod = action.payload.airpod;
      // state.watch = action.payload.watch;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.error = action.error.message;
    });
  }
});

export const { addIphone} = featuredSlice.actions;
export default featuredSlice.reducer;
