import imagesFooter from "./content";

import "./Footer.scss";

function Footer() {
  const [text, figma, telegram, youtube, github, sign] = imagesFooter;

  return (
    <footer className="footer">
      <div className="container container_footer">
        <div className="logo">
          <img src={text} alt="text_logo" />
        </div>
        <div className="description">
          <p className="descrption__goal">
            Выбери, каким будет IT завтра, вместе с нами
          </p>
          <p className="descrption__text">
            YeaHub — это полностью открытый проект, призванный объединить и
            улучшить IT-сферу. Наш исходный код доступен для просмотра на
            GitHub. Дизайн проекта также открыт для ознакомления в Figma.
          </p>
        </div>
        <hr />
        <div className="socialLinks">
          <p>&copy; 2024 YeaHub Документы</p>
          <div className="links">
            <p>Ищите нас и в других соцсетях @yeahub_it</p>
            <a href="#" target="_blank">
              <img src={figma} alt="figma" />
            </a>
            <a href="#" target="_blank">
              <img src={telegram} alt="telegram" />
            </a>
            <a href="#" target="_blank">
              <img src={youtube} alt="youtube" />
            </a>
            <a href="#" target="_blank">
              <img src={sign} alt="sign" />
            </a>
            <a href="#" target="_blank">
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
