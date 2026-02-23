import FiltersSection from "../../components/MainComponents/FiltersSection/FiltersSection";
import QuestionsSection from "../../components/MainComponents/QuestionsSection/QuestionsSection";
import ContextProvider from "../../context/ContextFilters";

import "./QuestionsPage.scss";

function QuestionsPage() {
  return (
    <ContextProvider>
      <div className="container container_questions">
        <QuestionsSection />
        <FiltersSection />
      </div>
    </ContextProvider>
  );
}

export default QuestionsPage;
