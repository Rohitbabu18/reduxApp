import React from 'react';

import { Provider } from 'react-redux';
import Screen from './src/Screen';
import store from './src/store';

function App() {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  );
};
export default App;
