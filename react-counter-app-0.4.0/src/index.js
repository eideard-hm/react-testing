import React from 'react';
import { createRoot } from 'react-dom/client';
import PrimeraApp from './PrimeraApp';
// import CounterApp from './CounterApp';

import './index.css';

const root = createRoot(document.querySelector('#app'));
// root.render(<CounterApp value={10} />)
root.render(<PrimeraApp saludo='Hola, soy Goku' />)