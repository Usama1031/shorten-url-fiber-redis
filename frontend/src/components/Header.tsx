const Header = () => {
  return (
    <header className="header">
      <div className="content | container">
        {/* Desktop Navbar */}
        <nav className="nav">
          <div className="nav__inner">
            {/* Logo */}
            <a href="#" className="logo">
              <img src="/go.png" alt="Logo" />
            </a>
            <span>+</span>
            <a href="#" className="logo">
              <img src="/logo.svg" alt="Logo" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
