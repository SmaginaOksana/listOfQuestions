export enum FilterName {
  SpecializationId = "specializationId",
  Skills = "skills",
  Complexity = "complexity",
  Rate = "rate",
  Status = "status",
  Search = "search",
}

export interface IInitialStateFilters {
  [FilterName.SpecializationId]: string;
  [FilterName.Skills]: string[];
  [FilterName.Complexity]: string[];
  [FilterName.Rate]: string[];
  [FilterName.Status]: string;
  [FilterName.Search]: string;
}

export interface IAllSpecializationsParams {
  limit?: number;
}
export type ISpecializationParams = number;

export interface ISpecialization {
  id: number;
  title: string;
  description: string;
}
export interface IAllSpecializationsResponce {
  data: ISpecialization[];
}
export interface ISpecializationResponce extends ISpecialization {}

export interface ISkillsParams {
  specializations?: number;
}
export interface ISkill {
  id: number;
  title: string;
  description: string;
}
export interface ISkillsResponce {
  data: ISkill[];
}

export type ButtonType = string | { title: string; id: number };
export type ButtonsType = ButtonType[];

export const isObjectButton = (
  btn: ButtonType
): btn is { title: string; id: number } =>
  typeof btn === "object" && btn !== null && "id" in btn && "title" in btn;
