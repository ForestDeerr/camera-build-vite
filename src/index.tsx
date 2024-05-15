import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

import dayjs from 'dayjs';
import 'dayjs/locale/ru';
dayjs.locale('ru');

import {Provider} from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
);
