export type BuildUserGoalsResponse = {
  goals: Array<Goal>;
};

export type GoalDetailsStepperProps = {
  goal: Goal;
};

export type Goal = {
  title: string;
  description: string;
  estimatedComplitionTime: string;
  path: Array<Step>;
};

export type Step = {
  title: string;
  description: string;
  practicalSteps: Array<string>;
};
