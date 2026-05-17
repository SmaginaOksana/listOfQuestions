import { Link } from "react-router-dom";

import "@features/user/navigate-to-auth/ui/AuthLinks/AuthLinks.scss";

function AuthLinks() {
  return (
    <div className="links">
      <Link to="login-page" className="link--white">
        Вход
      </Link>
      <Link to="register-page" className="link--purple">
        Регистрация
      </Link>
    </div>
  );
}

export default AuthLinks;
