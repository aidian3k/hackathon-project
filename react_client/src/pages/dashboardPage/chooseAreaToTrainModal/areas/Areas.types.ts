export interface AreaProps {
  openQuestions: (area: AreaTypes) => void;
}

export const enum AreaTypes {
  PHYSICAL = 0,
  MENTAL = 1,
  BOTH = 2
}

export const AreaNames = ['Physical', 'Mental', 'Physical & Mental'];
