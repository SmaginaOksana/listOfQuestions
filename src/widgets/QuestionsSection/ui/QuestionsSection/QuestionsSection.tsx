import { useEffect, useMemo, memo } from "react";
import { useSearchParams } from "react-router-dom";

import Question from "@entities/question/index";
import usePagination from "@shared/utils/hooks/usePagination";
import Skeleton from "@shared/ui/Skeleton/Skeleton";
import { useGetQuestionsQuery } from "@widgets/QuestionsSection/api/questionsApi";
import { useGetSpecializationQuery } from "@features/filter/filter-questions/api/specializationsApi";
import { useAppSelector } from "@app/providers/store/hooks";
import { FilterName } from "@features/filter/filter-questions/model/types";

import "@widgets/QuestionsSection/ui/QuestionsSection/QuestionsSection.scss";

const PAGE_LIMIT = 10;

const QuestionsSection = memo(function QuestionsSection() {
  const [params, setParams] = useSearchParams();

  const filters = useAppSelector((state) => state.filters);

  const { specializationId } = filters;

  const { currentPage, setCurrentPage, PaginationRender } =
    usePagination(PAGE_LIMIT);

  const { data } = useGetSpecializationQuery(+specializationId);

  const {
    data: questions,
    isLoading,
    isError,
  } = useGetQuestionsQuery(params.toString());

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  useEffect(() => {
    const searchParams = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value) && value.length > 0) {
        key === FilterName.Complexity
          ? value
              .flatMap((v) => v.split(" "))
              .forEach((v) => searchParams.append(key, v))
          : value.forEach((v) => searchParams.append(key, v));
      } else if (typeof value === "string" && value) {
        searchParams.set(key, value);
      }
    });

    searchParams.set("page", String(currentPage));

    setParams(searchParams, { replace: true });
  }, [filters, currentPage, setParams]);

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
      <h1>Вопросы: {data?.title}</h1>
      <hr />
      <div className="questions">{content}</div>
      {questions && questions.data.length > 0 && (
        <PaginationRender dataLength={questions.total} />
      )}
    </section>
  );
});

export default QuestionsSection;
