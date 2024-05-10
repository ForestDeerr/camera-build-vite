import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { CamerasType } from '../types/cameras.js';
import { setCameras } from './action';
import { APIRoute } from '../const';


export const fetchListCameras = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchListCameras',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<CamerasType>(APIRoute.Cameras);
    dispatch(setCameras(data));
  },
);
