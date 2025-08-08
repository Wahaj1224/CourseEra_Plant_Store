import {configureStore} from '@reduxjs/toolkit';

import reducers from './reducers/combineReducer.js';

export const store = configureStore({
    reducer: reducers,

    // thunk is included by default
   
    });

