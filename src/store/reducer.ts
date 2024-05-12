import {createReducer} from '@reduxjs/toolkit';
import {getCameras, getCamera} from './action';
import { CamerasType, CameraType } from '../types/cameras';

type InitalState = {
  cameras: CamerasType;
  camera: CameraType | null;
}

const initialState: InitalState = {
  cameras: [],
  camera: null,
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getCameras, (state, action) => {
      state.cameras = action.payload;
    })
    .addCase(getCamera, (state, action) => {
      state.camera = action.payload;
    });
});

export {reducer};
