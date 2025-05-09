import { ThemeProvider } from "styled-components";
import ContainerWidget from "./components/ContainerWidget/ContainerWidget";
import GlobalStyles from "./App.styled";
import { useTheme } from "./lib/useTheme";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
const App = () => {
  const { theme, loading } = useTheme('current-user-id');

  if (loading) return <div>Loading theme...</div>;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <ContainerWidget />
    </ThemeProvider>
  );
};

export default App;
