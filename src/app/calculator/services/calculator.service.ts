import { Injectable } from '@angular/core';

import { GoalOption } from '../enums/goal-option.enum';
import { CalculatorResults } from '../models/calculator-results.model';
import { CalculatorValues } from '../models/calculator-values.model';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  calculate(calculatorValues: CalculatorValues): CalculatorResults {
    const resultCalories: number = (calculatorValues.restingEnergy + (calculatorValues.activeEnergy || 0)) + calculatorValues.goal;
    const resultProtein: number = calculatorValues.goal === GoalOption.BuildMuscle ?
      Math.round(calculatorValues.weight) :
      Math.round(calculatorValues.weight * 1.1);
    const resultCarbs: number = Math.round((resultCalories * 0.8 / 4) - resultProtein);

    return {
      calories: Math.round(resultCalories),
      carbs: resultCarbs,
      fat: Math.round((resultCalories * 0.2) / 9),
      protein: resultProtein
    };
  }
}
