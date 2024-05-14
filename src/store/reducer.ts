import {createReducer} from '@reduxjs/toolkit';
import {getCameras, getCamera, getRequests} from './action';
import { CamerasType, CameraType } from '../types/cameras';
import { ReviewsType } from '../types/reviews';

type InitalState = {
  cameras: CamerasType;
  camera: CameraType | null;
  reviews: ReviewsType | null;
}

const initialState: InitalState = {
  cameras: [],
  camera: null,
  reviews: null,
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getCameras, (state, action) => {
      state.cameras = action.payload;
    })
    .addCase(getCamera, (state, action) => {
      state.camera = action.payload;
    })
    .addCase(getRequests, (state, action) => {
      state.reviews = action.payload;
    });
});

export {reducer};
