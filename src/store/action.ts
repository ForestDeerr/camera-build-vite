import { ReviewsType } from '../types/reviews';
import { PromosType } from '../types/promo';
import { CamerasType, CameraType } from '../types/cameras';

import { createAction } from '@reduxjs/toolkit';

export const getCameras = createAction<CamerasType>('date/loadCameras');
export const getCamera = createAction<CameraType>('data/loadCamera');
export const getRequests = createAction<ReviewsType>('data/loadRequest');
export const getPromo = createAction<PromosType>('data/loadPromo');
