export interface ISalary {
  id: number;
  jobId: number;
  minSalary: number;
  maxSalary: number;
  currency: string;
}

export interface IRequirement {
  id: number;
  jobId: number;
  requirement: string;
}
export interface ITag {
  id: number;
  jobId: number;
  tag: string;
}
export interface IJob {
  id: number;
  title: string;
  employmentType: string;
  description: string;
  location: string;
  applicationDeadline: string;
  createdBy: number;
  createdAt: string;
  updatedAt: string;
  salaries: ISalary;
  requirements: IRequirement[];
  tags: ITag;
}
