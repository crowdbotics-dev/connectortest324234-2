import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const myuniqueconnector_get_users_read = createAsyncThunk(
  "myuniqueconnector_response_get_users/myuniqueconnector_get_users_read",
  async payload => {
    const response = await apiService.myuniqueconnector_get_users_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const myuniqueconnector_response_get_usersSlice = createSlice({
  name: "myuniqueconnector_response_get_users",
  initialState,
  reducers: {},
  extraReducers: {
    [myuniqueconnector_get_users_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [myuniqueconnector_get_users_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [myuniqueconnector_get_users_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  myuniqueconnector_get_users_read,
  slice: myuniqueconnector_response_get_usersSlice
}
