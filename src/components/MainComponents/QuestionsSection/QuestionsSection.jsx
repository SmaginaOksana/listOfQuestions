import { useContext, useEffect } from "react";

import Question from "../Question/Question";
import PaginationSection from "../PaginationSection/PaginationSection";
import { ContextFilters } from "../../../context/ContextFilters";
import Skeleton from "../../Skeleton/Skeleton";

import "./QuestionsSection.scss";

function QuestionSection() {
  const {
    filters,
    selectedSpecialization,
    questions,
    loading,
    error,
    currentPage,
    setCurrentPage,
  } = useContext(ContextFilters);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const content = () => {
    if (loading) {
      return <Skeleton />;
    }
    if (error) {
      return <p className="error">{error.message}</p>;
    }
    if (questions?.data?.length === 0) {
      return <p className="empty">Вопросы не найдены...</p>;
    }

    return questions?.data?.map((question) => {
      return <Question question={question} key={question.id} />;
    });
  };

  return (
    <section>
      <h1>Вопросы: {selectedSpecialization?.title}</h1>
      <hr />
      <div className="questions">{content()}</div>
      {questions && questions.data.length > 0 && (
        <PaginationSection
          dataLength={questions.total}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </section>
  );
}

export default QuestionSection;
