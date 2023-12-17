import StepResponse from "@/services/quiz/StepResponse";

export type CourseResponse = {
  id: string;
  name: string;
  steps: StepResponse[]
};
