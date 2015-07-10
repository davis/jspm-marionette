'use strict';

import {history} from 'backbone';
import {LayoutView} from 'marionette';

import template from './template.hbs!';

export default LayoutView.extend({
  template,
  events: {
    'click button': 'goToAnotherView'
  },
  initialize() {

  },
  onRender() {
    console.log('someView is showing!');
  },
  goToAnotherView() {
    history.navigate('other', { trigger: true });
  }
});
