import {createAction} from '@reduxjs/toolkit';

import { CamerasType } from '../types/cameras';

export const setCameras = createAction<CamerasType>('date/loadCameras');


