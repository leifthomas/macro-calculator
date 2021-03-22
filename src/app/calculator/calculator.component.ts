import { Component } from '@angular/core';

import { CalculatorResults } from './models/calculator-results.model';
import { CalculatorValues } from './models/calculator-values.model';
import { CalculatorService } from './services/calculator.service';

@Component({
  selector: 'mc-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  calculatorResults!: CalculatorResults;

  constructor(private calculatorService: CalculatorService) { }

  onCalculatorValueChanges(calculatorValues: CalculatorValues): void {
    this.calculatorResults = this.calculatorService
      .calculate(calculatorValues);
  }

}
