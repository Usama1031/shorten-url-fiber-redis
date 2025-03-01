import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="content | container">
        {/* Desktop Navbar */}
        <nav className="nav">
          <div className="nav__inner">
            {/* Logo */}
            <a href="#" className="logo">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
