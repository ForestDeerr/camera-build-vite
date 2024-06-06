import { PromosType } from './../types/promo';
import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { CamerasType, CameraType } from '../types/cameras.js';
import { ReviewsType } from '../types/reviews.js';
import { getCameras, getCamera, getRequests, getPromo } from './action';
import { APIRoute } from '../const';


export const fetchListCameras = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchListCameras',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<CamerasType>(APIRoute.Cameras);
    dispatch(getCameras(data));
  },
);

export const fetchCameraAction = createAsyncThunk<void, number | string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCameraAction',
  async (_arg, {dispatch, extra: api}) => {
    const id = _arg;
    const {data} = await api.get<CameraType>(`${APIRoute.Cameras}/${id}`);
    dispatch(getCamera(data));
  },
);

export const fetchRequests = createAsyncThunk<void, number | string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchRequests',
  async (_arg, {dispatch, extra: api}) => {
    const id = _arg;
    const {data} = await api.get<ReviewsType>(`${APIRoute.Cameras}/${id}/reviews`);
    dispatch(getRequests(data));
  },
);

export const fetchPromos = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromos',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<PromosType>(APIRoute.Promo);
    dispatch(getPromo(data));
  },
);

