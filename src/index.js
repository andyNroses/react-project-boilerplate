/* Modules */
import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import routes from './routes';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './theme';

/* Global style */
const GlobalStyle = createGlobalStyle`
    @import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);
    body {
        margin: 0;
        padding: 20px;
        font-family: 'Roboto';
    }
`;

/**
 * App
 */
const App = () => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Root routes={routes} />
            </ThemeProvider>
        </React.Fragment>
    );
};

/* Render */
render(<App />, document.getElementById('app'));
