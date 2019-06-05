import React from 'react';
import { render } from 'react-dom';

import * as serviceWorker from './serviceWorker';

render(
  <h1>Começo da nossa aplicação React!</h1>,
  document.getElementById('root')
);

serviceWorker.unregister();