import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ApplicationRoutes from './routes/route';
import Header from './ui/Layout/Header';
import Footer from './ui/Layout/Footer';
import { navLinks } from './ui/Home/homeData';
import useTheme from './hooks/useTheme';
import useHeaderShadow from './hooks/useHeaderShadow';
import useActiveSection from './hooks/useActiveSection';
import useHashNavigation from './hooks/useHashNavigation';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const headerShadow = useHeaderShadow();
  const [activeSection, setActiveSection] = useActiveSection(navLinks);
  const location = useLocation();

  const openMenu = useCallback(() => setMenuOpen(true), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useHashNavigation(location.hash, setActiveSection);

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <Header
        navLinks={navLinks}
        activeSection={activeSection}
        menuOpen={menuOpen}
        headerShadow={headerShadow}
        onOpenMenu={openMenu}
        onCloseMenu={closeMenu}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <ApplicationRoutes />
      <Footer />
    </>
  );
}

export default App;
