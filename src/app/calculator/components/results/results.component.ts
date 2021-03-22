import { Component, Input } from '@angular/core';

import { CalculatorResults } from '../../models/calculator-results.model';

@Component({
  selector: 'mc-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  @Input() calculatorResults!: CalculatorResults;

}
