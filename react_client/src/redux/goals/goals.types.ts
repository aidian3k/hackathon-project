export type Step = {
  title: string;
  description: string;
  practicalSteps: string[];
};

export type Goal = {
  title: string;
  description: string;
  path: Step[];
  estimatedCompletionTime: string;
};

export type GoalsResponse = {
  goals: Goal[];
};
