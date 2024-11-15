import EmberRouter from '@ember/routing/router';
import config from 'portfolio-jessica/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('projects');
  this.route('contact', { path: '/contact-me' });
  this.route('project');
});
