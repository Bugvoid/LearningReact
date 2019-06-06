import React from 'react';
import { render } from 'react-dom';
import './style/theme.css';
import store from './store';
import { addTask } from './actions/taskActions';
import Layout from './pages/Layout';
import { faSyncAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

import * as serviceWorker from './serviceWorker';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-regular-svg-icons';


library.add(faCircle,faPlus);

window.store = store;
window.addTask = addTask;

render(
  <Layout />,
  document.getElementById('root')
);

serviceWorker.unregister();