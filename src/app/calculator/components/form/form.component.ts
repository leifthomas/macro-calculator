import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

import { GoalOption } from '../../enums/goal-option.enum';
import { CalculatorValues } from '../../models/calculator-values.model';

@Component({
  selector: 'mc-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnDestroy, OnInit {

  @Output() calculatorValueChanges: EventEmitter<CalculatorValues> = new EventEmitter();

  form: FormGroup = this.fb.group({
    activeEnergy: this.fb.control(null),
    restingEnergy: this.fb.control(null, Validators.required),
    goal: this.fb.control(null, Validators.required),
    weight: this.fb.control(null, Validators.required)
  });

  goalOptions: Array<{
    isDisabled: boolean,
    label: string,
    value: GoalOption
  }> = [
    {
      isDisabled: false,
      label: 'Burn fat (-15%)',
      value: GoalOption.BurnFat
    },
    {
      isDisabled: false,
      label: 'Maintain weight (+0%)',
      value: GoalOption.Maintain
    },
    {
      isDisabled: false,
      label: 'Build muscle (+10%)',
      value: GoalOption.BuildMuscle
    }
  ];

  subscriptions: Array<Subscription> = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void  {
    this.subscriptions
      .push(this.form
        .valueChanges
        .pipe(
          filter(() => this.form.valid),
          tap((calculatorValues: {
            activeEnergy: string,
            restingEnergy: string,
            goal: GoalOption,
            weight: string
          }) => this.calculatorValueChanges
            .emit(new CalculatorValues(calculatorValues))))
        .subscribe());
  }

  ngOnDestroy(): void {
    this.subscriptions
      .forEach((subscription: Subscription) => subscription.unsubscribe());
  }

}
