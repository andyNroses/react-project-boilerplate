import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Todos from '../';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import axiosMock from 'axios';

afterEach(cleanup);

const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})

test('Renders a todo list', async () => {
    const { getAllByTestId } = render(
        <ThemeProvider theme={theme}>
            <Todos />
        </ThemeProvider>
    );
    const todoNodes = await waitForElement(() => getAllByTestId('todo'));
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(todoNodes[0]).toHaveTextContent('mockTitle');
});