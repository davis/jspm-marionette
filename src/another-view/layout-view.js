'use strict';

import {history} from 'backbone';
import {LayoutView} from 'marionette';

import template from './template.hbs!';

export default LayoutView.extend({
  template,
  events: {
    'click button': 'goToSomeView'
  },
  initialize() {

  },
  onRender() {
    console.log('anotherView is showing!');
  },
  goToSomeView() {
    history.navigate('main', { trigger: true });
  }
});
