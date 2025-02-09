export interface Step {
  active: boolean;
  completed: boolean;
};

export interface Steps {
  [key: number]: Step;
};