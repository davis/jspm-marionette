'use strict';

import {history} from 'backbone';
import Radio from 'backbone.radio';
import {LayoutView} from 'marionette';

import SomeView from '../some-view/layout-view';
import AnotherView from '../another-view/layout-view';
import template from './template.hbs!';
import './styles.css!';

export default LayoutView.extend({
  template,
  el: '#app',
  regions: {
    content: '#content'
  },
  initialize() {
    // set up this view to listen for events triggered by our router
    Radio.channel('app').on('change:view', (viewName) => {
      this.showView(viewName);
    });
  },
  onRender() {
    history.navigate('main');
    this.showView();
  },
  showView(viewName = 'someView') {
    // defaults to 'someView'
    if (viewName === 'someView') {
      this.showChildView('content', new SomeView());
    } else if (viewName === 'anotherView') {
      this.showChildView('content', new AnotherView());
    }
  }
});
