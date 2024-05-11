import {createAction} from '@reduxjs/toolkit';

import { CamerasType, CameraType } from '../types/cameras';

export const setCameras = createAction<CamerasType>('date/loadCameras');
export const setCamera = createAction<CameraType>('data/loadOffer');


