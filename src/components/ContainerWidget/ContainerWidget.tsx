// ContainerWidget.tsx
import { useTheme } from '../../lib/useTheme';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import HomeDefaultDarkTheme from './HomeDefaultDarkTheme';


const ContainerWidget: React.FC = () => {
  const { theme, loading } = useTheme('current-user-id');

  if (loading) return <div>Loading...</div>;

  return (
    <ThemeProvider theme={theme}>
      <HomeDefaultDarkTheme />
    </ThemeProvider>
  );
};

export default ContainerWidget;