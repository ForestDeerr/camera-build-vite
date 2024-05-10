import {createReducer} from '@reduxjs/toolkit';
import {setCameras} from './action';
import { CamerasType } from '../types/cameras';

type InitalState = {
  cameras: CamerasType;
}

const initialState: InitalState = {
  cameras: [],
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCameras, (state, action) => {
      state.cameras = action.payload;
    });
});

export {reducer};
