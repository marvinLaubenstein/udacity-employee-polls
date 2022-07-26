import LoginScreen from './LoginScreen.js';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import reducer from '../../reducers';
import middleware from '../../middleware';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

describe('LoginPage', () => {
  it('should match snapshot after render', () => {
    const store = createStore(reducer, middleware);
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginScreen />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
