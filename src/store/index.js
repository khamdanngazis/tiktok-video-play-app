// store/index.js

import { createStore } from 'vuex';
import videoSearch from './modules/videoSearch';

export default createStore({
  modules: {
    videoSearch,  // Register the videoSearch module here
  }
});
