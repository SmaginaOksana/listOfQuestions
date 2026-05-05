import FiltersSection from "@widgets/FiltersSection/index";
import QuestionsSection from "@widgets/QuestionsSection/index";

import "@pages/QuestionsPage/QuestionsPage.scss";

function QuestionsPage() {
  return (
    <div className="container container_questions">
      <QuestionsSection />
      <FiltersSection />
    </div>
  );
}

export default QuestionsPage;
