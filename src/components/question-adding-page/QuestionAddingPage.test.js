import React from 'react';
import { Provider } from 'react-redux';
import reducer from '../../reducers';
import middleware from '../../middleware';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import QuestionAddingPage from './QuestionAddingPage.js';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('QuestionAddingPage', () => {
  let component;
  const store = createStore(reducer, middleware);
  beforeEach(async () => {
    component = render(
      <Provider store={store}>
        <BrowserRouter>
          <QuestionAddingPage />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should match snapshot after render', () => {
    expect(component).toMatchSnapshot();
  });
  it('should handle no input', () => {
    var submitButton = component.getByTestId('submit-button');
    fireEvent.click(submitButton);
    expect(component.getByTestId('error-title')).toBeInTheDocument();
  });
  it('should handle just one input', () => {
    var inputOne = component.getByTestId('answer-one-input');
    fireEvent.change(inputOne, { target: { value: 'First answer option' } });
    var submitButton = component.getByTestId('submit-button');
    fireEvent.click(submitButton);
    expect(component.getByTestId('error-title')).toBeInTheDocument();
  });
});
