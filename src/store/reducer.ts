import {createReducer} from '@reduxjs/toolkit';
import {setCameras, setCamera} from './action';
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
    .addCase(setCameras, (state, action) => {
      state.cameras = action.payload;
    })
    .addCase(setCamera, (state, action) => {
      state.camera = action.payload;
    });


});

export {reducer};
