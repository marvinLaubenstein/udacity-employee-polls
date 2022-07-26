import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../reducers';
import middleware from '../../middleware';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { handleAuthUserLogin } from '../../actions/authedUser';

describe('Navbar', () => {
  it('should match snapshot after render', () => {
    const store = createStore(reducer, middleware);
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });
});
