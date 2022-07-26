import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('should render the component', () => {
    const store = createStore(reducer, middleware);
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
