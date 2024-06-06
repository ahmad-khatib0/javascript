import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// Mount function to start up the app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      console.log(nextPathname);

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');

  if (devRoot) mount(devRoot);
}

export { mount };
