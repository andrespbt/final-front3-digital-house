import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import { Header } from './Components/Header';
import { useAppContext } from './hooks/useAppContext';

function App() {
  const {
    state: { isDarkMode },
  } = useAppContext();

  return (
    <div className="app">
      <Header isDarkMode={isDarkMode} />

      <main className="app__main">
        <Outlet />
      </main>

      <footer className="app__footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
