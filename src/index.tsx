import React from 'react';
import { render } from 'react-dom';

const renderApp = (): void => {
  // eslint-disable-next-line global-require
  const App = require('./app').default;
  render(
    <App />,
    document.getElementById('root'),
  );
};

renderApp();
if (module.hot) {
  module.hot.accept('./app', renderApp);
}
