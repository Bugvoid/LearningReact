import React from 'react';
import { render } from 'react-dom';
import './style/theme.css';

import Layout from './pages/Layout';

import * as serviceWorker from './serviceWorker';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-regular-svg-icons';


library.add(faCircle);

render(
  <Layout />,
  document.getElementById('root')
);

serviceWorker.unregister();