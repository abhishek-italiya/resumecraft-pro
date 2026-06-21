import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import { ResumeProvider } from './hooks/useResume';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ResumeProvider>
          <AppRoutes />
        </ResumeProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
