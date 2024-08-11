import {createReducer} from '@reduxjs/toolkit';
import {getCameras, getCamera, getRequests, getPromo, getBasket} from './action';
import { CamerasType, CameraType } from '../types/cameras';
import { ReviewsType } from '../types/reviews';
import { PromosType } from '../types/promo';

type InitalState = {
  cameras: CamerasType;
  camera: CameraType | null;
  reviews: ReviewsType | null;
  promo: PromosType | null;
  basket: CamerasType | null;
}

const initialState: InitalState = {
  cameras: [],
  camera: null,
  reviews: null,
  promo: null,
  basket: [],
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
    })
    .addCase(getPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(getBasket, (state, action) => {
      state.basket = action.payload;
    });
});

export {reducer};
