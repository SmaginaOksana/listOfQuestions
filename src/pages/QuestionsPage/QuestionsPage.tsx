import { FiltersSection } from "@widgets/FiltersSection/index";
import { QuestionsSection } from "@widgets/QuestionsSection/index";
import ContextProvider from "../../shared/context/ContextFilters";

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
