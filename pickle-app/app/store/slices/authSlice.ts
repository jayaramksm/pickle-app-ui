import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Dummy API delay
const apiDelay = (res:any) =>
  new Promise((resolve) => setTimeout(() => resolve(res), 1200));

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }:any, { rejectWithValue }) => {
    if (email && password ) {
    // if (email === "admin@test.com" && password === "admin123") {
      return apiDelay({
        role: "admin",
        email,
        name: "Admin User",
        token: "dummy-admin-token",
      });
    }

    if (email === "user@test.com" && password === "user123") {
      return apiDelay({
        role: "user",
        email,
        name: "Normal User",
        token: "dummy-user-token",
      });
    }

    return rejectWithValue("Invalid email or password");
  }
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async ({ name, email, password }:any, { rejectWithValue }) => {
    if (!email.includes("@")) return rejectWithValue("Invalid email");
    if (password.length < 6)
      return rejectWithValue("Password must be 6+ characters");

    return apiDelay({
      name,
      email,
      role: "user",
      token: "dummy-signup-token",
    });
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(loginUser.pending, (state:any) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state:any, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state:any, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // SIGNUP
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state:any, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state:any, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
