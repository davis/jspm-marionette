'use strict';

import Backbone from 'backbone';

import Application from './app/application';

const app = new Application();

app.on('start', () => {
  Backbone.history.start();
});

app.start();
