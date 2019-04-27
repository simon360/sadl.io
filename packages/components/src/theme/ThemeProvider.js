import React from 'react';
import PropTypes from 'prop-types';
import theme from './theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeProvider = ({ children, mode }) => {
  const themeToUse = {
    ...theme,
    color:
      mode === 'light'
        ? { ...theme.color }
        : { ...theme.color.onDark, onDark: theme.color },
  };

  return (
    <StyledThemeProvider theme={themeToUse}>{children}</StyledThemeProvider>
  );
};

ThemeProvider.defaultProps = {
  mode: 'light',
};

ThemeProvider.propTypes = {
  mode: PropTypes.oneOf(['light', 'dark']),
};

export default ThemeProvider;
