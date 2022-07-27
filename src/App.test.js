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
  let component;
  const store = createStore(reducer, middleware);
  beforeEach(async () => {
    component = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should match snapshot after render without login', () => {
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });
  it('should render Loginscreen', () => {
    expect(component.getByTestId('login')).toBeInTheDocument();
  });
});
