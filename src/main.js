'use strict';

import Backbone from 'backbone';
import Handlebars from 'handlebars/handlebars.runtime'; // use runtime environment to ensure helpers work

import Application from './app/application';

Handlebars.registerHelper('wrapWithMoo', (options) => {
  return new Handlebars.SafeString(`moo! ${options.fn(this)} moo!`);
});

const app = new Application();

app.on('start', () => {
  Backbone.history.start();
});

app.start();
