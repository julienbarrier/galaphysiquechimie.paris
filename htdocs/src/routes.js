// eslint-disable

import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './app/App';

const handleRouteChange = () => {
  if (!(window.pathname === '/guidelines/content/glossary')) {
    window.scrollTo(0, 0);
  }
};

const errorLoading = err => {
  console.error('Page loading failed', err);
};

const loadRoute = cb => {
  return module => cb(null, module.default);
};

const routes = {
  path: '/',
  component: App,
  onChange: handleRouteChange,
  indexRoute: {
    getComponent(location, cb) {
      import('./app/pages/overview/Overview').then(loadRoute(cb)).catch(errorLoading);
    },
  },
  childRoutes: [
    {
      path: 'getting-started',
      indexRoute: {
        onEnter: (nextState, replace) => replace('/getting-started/designers'),
      },
      childRoutes: [
        {
          path: '/getting-started/service-providers',
          indexRoute: {
            onEnter: (nextState, replace) =>
              replace('/getting-started/service-providers/general'),
          },
          childRoutes: [
            {
              path: '/getting-started/:name/:page',
              getComponent(location, cb) {
                import('./app/pages/getting-started/GettingStarted')
                  .then(loadRoute(cb))
                  .catch(errorLoading);
                },
              },
            ],
          },
          {
            path: '/getting-started/:name',
            getComponent(location, cb) {
              import('./app/pages/getting-started/GettingStarted')
                .then(loadRoute(cb))
                .catch(errorLoading);
            },
          },
        ],
      },
    {
      path: 'guidelines',
      indexRoute: {
        onEnter: (nextState, replace) => replace('/guidelines/accessibility'),
      },
      childRoutes: [
        {
          path: '/guidelines/content',
          indexRoute: {
            onEnter: (nextState, replace) =>
              replace('/guidelines/content/general'),
          },
          childRoutes: [
            {
              path: '/guidelines/:name/:page',
              getComponent(location, cb) {
                import('./app/pages/guidelines/Guidelines')
                  .then(loadRoute(cb))
                  .catch(errorLoading);
              },
            },
          ],
        },
        {
          path: '/guidelines/:name',
          getComponent(location, cb) {
            import('./app/pages/guidelines/Guidelines')
              .then(loadRoute(cb))
              .catch(errorLoading);
          },
        },
      ],
    },
    {
      path: 'style',
      indexRoute: {
        onEnter: (nextState, replace) => replace('/style/color/swatches'),
      },
      childRoutes: [
        {
          path: '/style/color',
          indexRoute: {
            onEnter: (nextState, replace) => replace('/style/color/swatches'),
          },
          childRoutes: [
            {
              path: '/style/:name/:page',
              getComponent(location, cb) {
                import('./app/pages/style/Style')
                  .then(loadRoute(cb))
                  .catch(errorLoading);
              },
            },
          ],
        },
        {
          path: '/style/iconography',
          indexRoute: {
            onEnter: (nextState, replace) =>
              replace('/style/iconography/library'),
          },
          childRoutes: [
            {
              path: '/style/:name/:page',
              getComponent(location, cb) {
                import('./app/pages/style/Style')
                  .then(loadRoute(cb))
                  .catch(errorLoading);
              },
            },
          ],
        },
        {
          path: '/style/grid',
          indexRoute: {
            onEnter: (nextState, replace) =>
              replace('/style/grid/design'),
          },
          childRoutes: [
            {
              path: '/style/:name/:page',
              getComponent(location, cb) {
                import('./app/pages/style/Style')
                  .then(loadRoute(cb))
                  .catch(errorLoading);
              },
            },
          ],
        },
        {
          path: '/style/layer',
          indexRoute: {
            onEnter: (nextState, replace) => replace('/style/layer/overview'),
          },
          childRoutes: [
            {
              path: '/style/:name/:page',
              getComponent(location, cb) {
                import('./app/pages/style/Style')
                  .then(loadRoute(cb))
                  .catch(errorLoading);
              },
            },
          ],
        },
        {
          path: '/style/typography',
          indexRoute: {
            onEnter: (nextState, replace) => replace('/style/typography/overview'),
          },
          childRoutes: [
            {
              path: '/style/:name/:page',
              getComponent(location, cb) {
                import('./app/pages/style/Style')
                  .then(loadRoute(cb))
                  .catch(errorLoading);
              },
            },
          ],
        },
        {
          path: '/style/:name',
          getComponent(location, cb) {
            import('./app/pages/style/Style')
              .then(loadRoute(cb))
              .catch(errorLoading);
          },
        },
      ],
    },
    {
      path: 'components',
      indexRoute: {
        onEnter: (nextState, replace) => replace('/components/overview'),
      },
      childRoutes: [
        {
          path: '/components/:name',
          indexRoute: {
            onEnter: (nextState, replace) => {
              if (!(nextState.params.name === 'overview')) {
                replace(`/components/${nextState.params.name}/code`)
              }
            },
          },
          getComponent(location, cb) {
            import ('./app/pages/components/ComponentPage')
              .then(loadRoute(cb))
              .catch(errorLoading)
          }
        },
        {
          path: '/components/:name/:page',
          getComponent(location, cb) {
            import('./app/pages/components/ComponentPage')
              .then(loadRoute(cb))
              .catch(errorLoading);
          },
        },
      ],
    },
    {
      path: 'add-ons',
      indexRoute: {
        onEnter: (nextState, replace) => replace('/add-ons/overview'),
      },
      childRoutes: [
        {
          path: '/add-ons/:name',
          indexRoute: {
            onEnter: (nextState, replace) => {
              if (!(nextState.params.name === 'overview')) {
                replace(`/add-ons/${nextState.params.name}/code`)
              }
            },
          },
          getComponent(location, cb) {
            import ('./app/pages/add-ons/ComponentPage')
              .then(loadRoute(cb))
              .catch(errorLoading)
          }
        },
        {
          path: '/add-ons/:name/:page',
          getComponent(location, cb) {
            import('./app/pages/add-ons/ComponentPage')
              .then(loadRoute(cb))
              .catch(errorLoading);
          },
        },
      ],
    },
    {
      path: 'resources',
      getComponent(location, cb) {
        import('./app/pages/resources/Resources').then(loadRoute(cb)).catch(errorLoading);
      },
    },
    {
      path: 'themes',
      getComponent(location, cb) {
        import('./app/pages/themes/Themes').then(loadRoute(cb)).catch(errorLoading);
      },
    },
    {
      path: 'whats-new',
      getComponent(location, cb) {
        import('./app/pages/whats-new/whats-new').then(loadRoute(cb)).catch(errorLoading);
      },
    },
    {
      path: 'component-status',
      getComponent(location, cb) {
        import('./app/pages/component-status/ComponentStatus')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },

    {
      path: 'data-vis',
      indexRoute: {
        onEnter: (nextState, replace) => replace('/data-vis/overview/general'),
      },
      childRoutes: [
        {
          path: '/data-vis/:name',
          indexRoute: {
            onEnter: (nextState, replace) => {
              if (!(nextState.params.name === 'overview')) {
                replace(`/data-vis/${nextState.params.name}/code`)
              } else {
                replace(`/data-vis/overview/general`)
              }
            },
          },
          getComponent(location, cb) {
            import ('./app/pages/data-vis/DataVis')
              .then(loadRoute(cb))
              .catch(errorLoading)
          }
        },
        {
          path: '/data-vis/:name/:page',
          getComponent(location, cb) {
            import('./app/pages/data-vis/DataVis')
              .then(loadRoute(cb))
              .catch(errorLoading);
          },
        },
      ],
    },

    {
      path: '*',
      getComponent(location, cb) {
        import('./app/pages/404').then(loadRoute(cb)).catch(errorLoading);
      },
    },
  ],
};

export default routes;
