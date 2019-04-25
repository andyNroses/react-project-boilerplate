import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Todo from '../Todo';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';

afterEach(cleanup);

test('Renders a todo', () => {
    const todoData = { title: 'Todo testing', completed: false };
    const { getByTestId } = render(
        <ThemeProvider theme={theme}>
            <Todo title={todoData.title} completed={todoData.completed} />
        </ThemeProvider>
    );
    const todoNode = getByTestId('todo');
    expect(todoNode).toHaveTextContent(todoData.title);
    const badgeNode = getByTestId('badge');
    expect(badgeNode).toHaveTextContent('Uncompleted');
    expect(badgeNode).toHaveStyle(`
        background-color: ${theme.todos.badge.uncompleted};
    `);
});