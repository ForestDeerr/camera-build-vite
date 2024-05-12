import {createAction} from '@reduxjs/toolkit';

import { CamerasType, CameraType } from '../types/cameras';

export const getCameras = createAction<CamerasType>('date/loadCameras');
export const getCamera = createAction<CameraType>('data/loadCamera');


