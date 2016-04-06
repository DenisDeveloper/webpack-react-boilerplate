import React from 'react';
import {render} from 'react-dom';
import App from './app';
import './index.sass';

const store = {
  hello: 'Hello',
  name: 'Jo',
  users: ['jack', 'Bob', 'tom', 'ded', 'jhon']
};

render(
  <App store={store} />,
  document.getElementById('root')
);
