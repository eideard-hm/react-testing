import React from 'react';
import { createRoot } from 'react-dom/client';
import CounterApp from './CounterApp';

import './index.css';

const root = createRoot(document.querySelector('#app'));
root.render(<CounterApp value={10} />)