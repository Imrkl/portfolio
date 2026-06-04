function Navbar({ theme, toggleTheme, language, toggleLanguage }) {
  return (
    <header className="navbar">
      <div className="navbar-buttons">
        <button onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark' : '☀ Light'}
        </button>

        <button onClick={toggleLanguage}>
          {language === 'ru' ? 'EN' : 'RU'}
        </button>
      </div>
    </header>
  )
}

export default Navbar