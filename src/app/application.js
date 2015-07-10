'use strict';

import {Application} from 'marionette';

import Router from './router';
import LayoutView from './layout-view';

export default Application.extend({
  initialize() {
    this.layout = new LayoutView();
    this.router = new Router({ layout: this.layout });
    this.layout.render();
  }
});
