import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteRequest,
  postRequest,
  putRequest,
  getRequest,
} from "../../components/api/Api";

export const createUser = createAsyncThunk(
  "/users/create",
  async (form, thunkApi) => {
    const { fulfillWithValue, rejectWithValue } = thunkApi;
    const { status, result, error } = await postRequest("/users/create", form);
    console.log(result);
    return error
      ? rejectWithValue(`Cannot sign up - Error status ${status} - ${error}`)
      : fulfillWithValue(result);
  }
);
export const getAllUser = createAsyncThunk(
  "/users/readall",
  async (_, thunkApi) => {
    const { fulfillWithValue, rejectWithValue } = thunkApi;
    const token = window.localStorage.getItem("token");
    const { status, result, error } = await getRequest("/users/readall", token);
    return error
      ? rejectWithValue(`Cannot get user - Error status ${status} - ${error}`)
      : fulfillWithValue(result.data);
  }
);

export const readUser = createAsyncThunk("/users/read", async (_, thunkApi) => {
  const { fulfillWithValue, rejectWithValue } = thunkApi;
  const token = window.localStorage.getItem("token");
  const { status, result, error } = await getRequest("/users/read", token);
  return error
    ? rejectWithValue(`Cannot get user - Error status ${status} - ${error}`)
    : fulfillWithValue(result.data);
});

export const updateUser = createAsyncThunk(
  "/users/upadate",
  async (form, thunkApi) => {
    const { fulfillWithValue, rejectWithValue } = thunkApi;
    const token = window.localStorage.getItem("token");
    const { status, result, error } = await putRequest(
      "/users/update",
      form,
      token
    );

    console.log(result);
    return error
      ? rejectWithValue(`Cannot get user - Error status ${status} - ${error}`)
      : fulfillWithValue(result);
  }
);

export const updateUserAdmin = createAsyncThunk(
  "/users/upadateAdmin",
  async (form, thunkApi) => {
    const { fulfillWithValue, rejectWithValue } = thunkApi;
    const token = window.localStorage.getItem("token");
    const { status, result, error } = await putRequest(
      "/users/updateAdmin",
      form,
      token
    );
    console.log(result);
    return error
      ? rejectWithValue(`Cannot get user - Error status ${status} - ${error}`)
      : fulfillWithValue(result);
  }
);

export const updatePassword = createAsyncThunk(
  "/users/password",
  async (form, thunkApi) => {
    const { fulfillWithValue, rejectWithValue } = thunkApi;
    const token = window.localStorage.getItem("token");
    const { status, result, error } = await putRequest(
      "/users/password",
      { password: form },
      token
    );
    window.location.href = "/profile";
    console.log(result);
    return error
      ? rejectWithValue(`Cannot get user - Error status ${status} - ${error}`)
      : fulfillWithValue(result);
  }
);

export const deleteUser = createAsyncThunk(
  "/users/delete",
  async (user, thunkApi) => {
    const { fulfillWithValue, rejectWithValue } = thunkApi;
    const token = window.localStorage.getItem("token");
    const { status, result, error } = await deleteRequest(
      "/users/delete",
      { user: user },
      token
    );
    return error
      ? rejectWithValue(`Cannot get user - Error status ${status} - ${error}`)
      : fulfillWithValue(result.data);
  }
);
