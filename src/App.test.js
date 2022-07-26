import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('App', () => {
  const store = createStore(reducer, middleware);
  it('should match snapshot after render without login', () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });
  it('should render Loginscreen', () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(component.getByTestId('login')).toBeInTheDocument();
  });
});
