import React, { useState, useEffect } from 'react';
import './styles/global.css';
import { LANG } from './data/lang.js';
import HomeView from './views/HomeView.jsx';
import HashDemoView from './views/HashDemoView.jsx';
import MiningView from './views/MiningView.jsx';
import AboutProjectView from './views/AboutProjectView.jsx';
import AboutTeamView from './views/AboutTeamView.jsx';

function HamburgerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="2" y1="6" x2="20" y2="6"/>
      <line x1="2" y1="11" x2="20" y2="11"/>
      <line x1="2" y1="16" x2="20" y2="16"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="4" y1="4" x2="18" y2="18"/>
      <line x1="18" y1="4" x2="4" y2="18"/>
    </svg>
  );
}

export default function App() {
  const [tab, setTab] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState("vi");
  const [theme, setTheme] = useState("dark");

  const t = LANG[lang];
  const TABS = [
    { id: "home",   label: t.nav.home },
    { id: "demo",   label: t.nav.demo },
    { id: "mining", label: t.nav.mining },
    { id: "about",  label: t.nav.about },
    { id: "team",   label: t.nav.team },
  ];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const switchTab = (id) => {
    setTab(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleLang = () => setLang(l => l === 'vi' ? 'en' : 'vi');
  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <>
      {/* Top Navigation */}
      <nav className="nav">
        <div className="nav-inner">
          <a className="nav-logo" onClick={() => switchTab("home")} style={{ cursor: "pointer" }}>
            <div className="nav-logo-icon">⛓</div>
            <div>
              <span className="nav-logo-text">CryptoHash</span>
              <span className="nav-logo-sub"> Demo</span>
            </div>
          </a>

          <ul className="nav-links">
            {TABS.map(tb => (
              <li key={tb.id}>
                <button className={`nav-link ${tab === tb.id ? "active" : ""}`} onClick={() => switchTab(tb.id)}>
                  {tb.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Lang & Theme toggles */}
          <div style={{ display: "flex", gap: 6, marginLeft: 8 }}>
            <button onClick={toggleLang} className="btn btn-ghost btn-sm" style={{ padding: "5px 10px", fontSize: 12, minWidth: 0, borderRadius: 8 }} title={lang === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}>
              {lang === 'vi' ? '🇬🇧 EN' : '🇻🇳 VI'}
            </button>
            <button onClick={toggleTheme} className="btn btn-ghost btn-sm" style={{ padding: "5px 10px", fontSize: 14, minWidth: 0, borderRadius: 8 }} title={theme === 'dark' ? 'Light mode' : 'Dark mode'}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>

          <button className="nav-hamburger" onClick={() => setMobileOpen(o => !o)} aria-label="Toggle menu">
            {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>

        <div className={`nav-mobile ${mobileOpen ? "open" : ""}`}>
          {TABS.map(tb => (
            <button key={tb.id} className={`nav-mobile-link ${tab === tb.id ? "active" : ""}`} onClick={() => switchTab(tb.id)}>
              {tb.label}
            </button>
          ))}
          <div style={{ display: "flex", gap: 8, padding: "8px 16px" }}>
            <button onClick={toggleLang} className="btn btn-ghost btn-sm" style={{ fontSize: 12 }}>{lang === 'vi' ? '🇬🇧 English' : '🇻🇳 Tiếng Việt'}</button>
            <button onClick={toggleTheme} className="btn btn-ghost btn-sm" style={{ fontSize: 12 }}>{theme === 'dark' ? '☀️ Light' : '🌙 Dark'}</button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {tab === "home"    && <HomeView setTab={switchTab} lang={lang} />}
      {tab === "demo"    && <HashDemoView lang={lang} />}
      {tab === "mining"  && <MiningView lang={lang} />}
      {tab === "about"   && <AboutProjectView lang={lang} />}
      {tab === "team"    && <AboutTeamView lang={lang} />}

      {/* Footer */}
      <footer style={{ background: "var(--bg1)", borderTop: "1px solid var(--border)", padding: "24px", textAlign: "center" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", fontSize: 12, color: "var(--text3)", lineHeight: 2 }}>
          <strong style={{ color: "var(--cyan)" }}>CryptoHash Demo</strong> · {t.footer} &nbsp;·&nbsp;
          Built with React 18 &amp; Node.js &nbsp;·&nbsp;
          <img src="/images/logo_hub.png" alt="HUB Logo" style={{ height: 20, verticalAlign: "middle", marginLeft: 6, borderRadius: 3 }} />
          <span style={{ marginLeft: 6, fontSize: 11 }}>ĐH Ngân hàng TP.HCM</span>
        </div>
      </footer>
    </>
  );
}