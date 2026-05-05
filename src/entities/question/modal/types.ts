export interface IQuestion {
  id: number;
  title: string;
  rate: number;
  imageSrc: string;
  complexity: number;
  shortAnswer: string;
}

export interface IQuestionProps {
  question: IQuestion;
}
