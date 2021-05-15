import { GoalOption } from '../enums/goal-option.enum';

export class CalculatorValues {
  activeEnergy!: number;
  restingEnergy!: number;
  goal!: GoalOption;
  weight!: number;

  constructor( input: {
    activeEnergy: string,
    restingEnergy: string,
    goal: GoalOption,
    weight: string
  }) {
    this.activeEnergy = parseInt(input.activeEnergy, 10);
    this.restingEnergy = parseInt(input.restingEnergy, 10);
    this.goal = input.goal;
    this.weight = parseInt(input.weight, 10);
  }
}
