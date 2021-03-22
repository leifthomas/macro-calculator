import { GoalOption } from '../enums/goal-option.enum';

export class CalculatorValues {
  activeCalories!: number;
  bmr!: number;
  goal!: GoalOption;
  weight!: number;

  constructor( input: {
    activeCalories: string,
    bmr: string,
    goal: GoalOption,
    weight: string
  }) {
    this.activeCalories = parseInt(input.activeCalories, 10);
    this.bmr = parseInt(input.bmr, 10);
    this.goal = input.goal;
    this.weight = parseInt(input.weight, 10);
  }
}
