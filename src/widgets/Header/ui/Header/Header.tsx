import { NavLink, Link } from "react-router-dom";

import AuthLinks from "@features/user/navigate-to-auth/ui/AuthLinks/AuthLinks";

import yeahub_logo from "@shared/assets/yeahub_logo.svg";
import text_logo from "@shared/assets/yeahub_dark_logo.png";

import "@widgets/Header/ui/Header/Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="container container_header">
        <nav className="nav">
          <div className="logo">
            <Link to="#">
              <img src={yeahub_logo} alt="yeahub_logo" className="logo-image" />
              <img src={text_logo} alt="text_logo" />
            </Link>
          </div>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" className="navlink">
                База вопросов
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="navlink">
                Тренажер
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="navlink">
                Материалы
              </NavLink>
            </li>
          </ul>
        </nav>
        <AuthLinks />
      </div>
    </header>
  );
}

export default Header;
