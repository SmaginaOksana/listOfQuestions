import { useEffect, useMemo } from "react";

import Question from "@entities/question/index";
import usePagination from "@shared/utils/hooks/usePagination";
import Skeleton from "@shared/ui/Skeleton/Skeleton";
import { useGetQuestionsQuery } from "@widgets/QuestionsSection/api/questionsApi";
import { useAppSelector } from "@app/store/hooks";

import "@widgets/QuestionsSection/ui/QuestionsSection/QuestionsSection.scss";

const PAGE_LIMIT = 10;

function QuestionsSection() {
  const filters = useAppSelector((state) => state.filters);
  const {
    specializationTitle,
    specializationId,
    skills,
    complexity,
    rate,
    search: title,
  } = filters;

  const { currentPage, setCurrentPage, PaginationRender } =
    usePagination(PAGE_LIMIT);

  const paramsQuestions = useMemo(
    () => ({
      specializationId: specializationId || undefined,
      skills: (skills.length && skills.map((item) => +item)) || undefined,
      complexity:
        (complexity.length &&
          complexity.flatMap((item) => item.split(" ")).map((item) => +item)) ||
        undefined,
      rate: (rate.length && rate.map((item) => +item)) || undefined,
      title,
      page: currentPage,
      limit: PAGE_LIMIT,
    }),
    [filters, currentPage]
  );

  const {
    data: questions,
    isLoading,
    isError,
  } = useGetQuestionsQuery(paramsQuestions);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const content = useMemo(() => {
    if (isLoading) {
      return <Skeleton />;
    }
    if (isError) {
      return <p className="error">Ошибка при получении данных</p>;
    }
    if (questions?.data.length === 0) {
      return <p className="empty">Вопросы не найдены...</p>;
    }

    return questions?.data.map((question) => {
      return <Question question={question} key={question.id} />;
    });
  }, [isLoading, isError, questions]);

  return (
    <section>
      <h1>Вопросы: {specializationTitle}</h1>
      <hr />
      <div className="questions">{content}</div>
      {questions && questions.data.length > 0 && (
        <PaginationRender dataLength={questions.total} />
      )}
    </section>
  );
}

export default QuestionsSection;
