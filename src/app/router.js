'use strict';

import Radio from 'backbone.radio';
import {AppRouter} from 'marionette';

export default AppRouter.extend({
  routes: {
    'main': 'showSomeView',
    'other': 'showAnotherView'
  },
  showSomeView() {
    Radio.channel('app').trigger('change:view', 'someView');
  },
  showAnotherView() {
    Radio.channel('app').trigger('change:view', 'anotherView');
  }
});
