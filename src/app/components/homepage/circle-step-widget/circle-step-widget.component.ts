import { Component, Input, OnInit } from '@angular/core';
import { HomepageRegisterCircleStepDetails } from '../steps-to-register-widget/steps-to-register-widget.component';

@Component({
  selector: 'app-circle-step-widget',
  templateUrl: './circle-step-widget.component.html',
  styleUrls: ['./circle-step-widget.component.scss']
})
export class CircleStepWidgetComponent implements OnInit {

  @Input() stepDetails!: HomepageRegisterCircleStepDetails;
  hasFocus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
