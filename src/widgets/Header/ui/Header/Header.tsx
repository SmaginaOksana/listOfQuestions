import yeahub_logo from "@shared/assets/yeahub_logo.svg";
import text_logo from "@shared/assets/yeahub_dark_logo.png";

import "@widgets/Header/ui/Header/Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="container container_header">
        <nav className="nav">
          <div className="logo">
            <a href="#">
              <img src={yeahub_logo} alt="yeahub_logo" className="logo-image" />
              <img src={text_logo} alt="text_logo" />
            </a>
          </div>
          <ul className="nav-list">
            <li className="nav-item">
              <a className="nav-link" href="#">
                База вопросов
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Тренажер
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Материалы
              </a>
            </li>
          </ul>
        </nav>
        <div className="buttons">
          <button className="button--white">Вход</button>
          <button className="button--purple">Регистрация</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
