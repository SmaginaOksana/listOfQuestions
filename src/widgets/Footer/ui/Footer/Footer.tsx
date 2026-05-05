import "@widgets/Footer/ui/Footer/Footer";

import links from "@widgets/Footer/ui/Footer/contentFooter";
import text from "@shared/assets/yeahub_light_logo.png";

import "@widgets/Footer/ui/Footer/Footer.scss";

function Footer() {
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
          <div className="linksWrapper">
            <p>Ищите нас и в других соцсетях @yeahub_it</p>
            <ul className="links">
              {links.map(({ imgSrc, alt }) => (
                <li key={alt}>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={imgSrc} alt={alt} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
