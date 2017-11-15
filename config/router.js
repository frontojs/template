import createRouter from 'router5';
import loggerPlugin from 'router5/plugins/logger';
import listenersPlugin from 'router5/plugins/listeners';
import browserPlugin from 'router5/plugins/browser';

import routes from './routes';

export default function configureRouter(useListenersPlugin = false) {
  const router = createRouter(routes, {
    defaultRoute: 'posts'
  })
    .usePlugin(loggerPlugin)
    .usePlugin(browserPlugin())

  if (useListenersPlugin) {
    router.usePlugin(listenersPlugin())
  }

  return router;
}