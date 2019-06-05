import React from 'react';
import { render } from 'react-dom';

import * as serviceWorker from './serviceWorker';
import Layout from './pages/Layout';

render(
    <Layout />,
    document.getElementById('root')
);

serviceWorker.unregister();