import React from 'react';
import ReactDOM from 'react-dom';

import AppEntry from './App.entry';

// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(
    <AppEntry />,
    el,
  );
}


// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing_dev_root');

  if (devRoot) {
    mount(devRoot);
  }
}

// Running through container, export the mount function
export { mount };
