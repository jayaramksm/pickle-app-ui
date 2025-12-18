import { loginAPI, signupAPI } from "@/app/services/auth.service";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const res: any = await loginAPI({ email, password });

      // store token
      localStorage.setItem("token", res.token);

      return res;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Login failed"
      );
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (
    { name, email, password , role}: { name: string; email: string; password: string, role: string },
    { rejectWithValue }
  ) => {
    try {
      const res: any = await signupAPI({ name, email, password , role});

      localStorage.setItem("token", res.token);

      return res;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Signup failed"
      );
    }
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null as any,
    loading: false,
    error: null as string | null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(loginUser.pending, (state: any) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state: any, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // SIGNUP
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state: any, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
