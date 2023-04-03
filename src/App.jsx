import Footer from './Components/Footer';
import { Header } from './Components/Header';
import { Main } from './Components/Main/Main';
import { useAppContext } from './hooks/useAppContext';

function App() {
  const {
    state: { isDarkMode },
  } = useAppContext();

  return (
    <div className="app">
      <Header themeClass={isDarkMode ? 'dark' : 'light'} />
      <Main themeClass={isDarkMode ? 'mainDark' : 'mainLight'} />

      <footer className="app__footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
