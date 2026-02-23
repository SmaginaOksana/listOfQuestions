import parse from "html-react-parser";

import useToggle from "../../../hooks/useToggle";
import arrow_closed from "../../../assets/arrow_closed.svg";
import arrow_opened from "../../../assets/arrow_opened.svg";

import "./Question.scss";

function Question({ question }) {
  const [isOpen, handleToggle] = useToggle();
  const { title, rate, imageSrc, complexity, shortAnswer } = question;

  return (
    <article onClick={handleToggle}>
      <div className="question">
        <h2>{title}</h2>
        <img src={isOpen ? arrow_opened : arrow_closed} alt="arrow" />
      </div>
      <div className={`answerWrapper ${isOpen ? "open" : ""}`}>
        <div className="info">
          <div className="rate">
            <span className="text">Рейтинг:</span>
            <span className="score">{rate}</span>
          </div>
          <div className="complexity">
            <span className="text">Cложность:</span>
            <span className="score">{complexity}</span>
          </div>
        </div>
        {imageSrc && (
          <div className="imageExample">
            <img src={imageSrc} alt="example" />
          </div>
        )}
        <div className="answer">{parse(shortAnswer)}</div>
      </div>
    </article>
  );
}

export default Question;
