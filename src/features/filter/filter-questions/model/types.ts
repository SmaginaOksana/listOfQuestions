export enum FilterName {
  SpecializationTitle = "specializationTitle",
  SpecializationId = "specializationId",
  Skills = "skills",
  Complexity = "complexity",
  Rate = "rate",
  Status = "status",
  Search = "search",
}

export interface IInitialStateFilters {
  [FilterName.SpecializationTitle]: string;
  [FilterName.SpecializationId]: number;
  [FilterName.Skills]: number[];
  [FilterName.Complexity]: string[];
  [FilterName.Rate]: string[];
  [FilterName.Status]: string;
  [FilterName.Search]: string;
}

export interface ISpecializationsParams {
  limit: number;
}
export interface ISpecialization {
  id: number;
  title: string;
  description: string;
}
export interface ISpecializationsResponce {
  data: ISpecialization[];
}

export interface ISkillsParams {
  specializations: number;
}
export interface ISkill {
  id: number;
  title: string;
  description: string;
}
export interface ISkillsResponce {
  data: ISkill[];
}
