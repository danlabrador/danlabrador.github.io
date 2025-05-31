export default function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#about" className="nav__link">
            <span className="nav__indicator"></span>
            <span className="nav__text">About</span>
          </a>
        </li>
        <li className="nav__item">
          <a href="#projects" className="nav__link">
            <span className="nav__indicator"></span>
            <span className="nav__text">Projects</span>
          </a>
        </li>
        <li className="nav__item">
          <a href="#experience" className="nav__link">
            <span className="nav__indicator"></span>
            <span className="nav__text">Experience</span>
          </a>
        </li>
        <li className="nav__item">
          <a href="#articles" className="nav__link">
            <span className="nav__indicator"></span>
            <span className="nav__text">Articles</span>
          </a>
        </li>
        <li className="nav__item">
          <a href="#contact" className="nav__link">
            <span className="nav__indicator"></span>
            <span className="nav__text">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
