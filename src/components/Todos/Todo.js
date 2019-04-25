/* Modules */
import React from 'react';
import styled from 'styled-components';

/**
 * Badge
 */
const Badge = styled.span`
    margin-left: 5px;
    padding: 3px;
    background-color: ${props => props.completed ? 
                        props.theme.todos.badge.completed :
                        props.theme.todos.badge.uncompleted };
    border-radius: 3px;
`;

/**
 * Todo
 */
const Todo = ({ title, completed }) => {
    const badgeLabel = completed ? 'Completed' : 'Uncompleted';
    return(
        <div data-testid='todo' style={{ marginBottom: '15px' }}>
            { title } 
            <Badge data-testid='badge' {...{completed}}>{ badgeLabel }</Badge>
        </div>
    );
}

export default Todo;