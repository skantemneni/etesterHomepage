import { Component, OnInit } from '@angular/core';

export interface HomepageRegisterCircleStepDetails {
  stemNameUrl: string;
  passiveColor: string;
  activeColor: string;
  captionHTML: string;
  detailHTML: string;
}
@Component({
  selector: 'app-steps-to-register-widget',
  templateUrl: './steps-to-register-widget.component.html',
  styleUrls: ['./steps-to-register-widget.component.scss']
})
export class StepsToRegisterWidgetComponent implements OnInit {

  createAccountStep: HomepageRegisterCircleStepDetails = {
    stemNameUrl: "Create Login Window",
    passiveColor: "#FFCC00",
    activeColor: "#FFE065",
    captionHTML: "Create <br/> Account",
    detailHTML: "Click here <br/>to create <br/> your <br/>account"
  };

  activateYourAccountStep: HomepageRegisterCircleStepDetails = {
    stemNameUrl: "Activate your Login",
    passiveColor: "#98D417",
    activeColor: "#C7F22C",
    captionHTML: "Activate<br/> Your <br/> Account",
    detailHTML: "Check your<br/> email to<br/> activate"
  };

  loginStep: HomepageRegisterCircleStepDetails = {
    stemNameUrl: "Login",
    passiveColor: "#F37121",
    activeColor: "#FFAF59",
    captionHTML: "Login",
    detailHTML: "Click here <br/>to <br/>login"
  };

  tryFreeStep: HomepageRegisterCircleStepDetails = {
    stemNameUrl: "Test",
    passiveColor: "#ED0372",
    activeColor: "#FF3D97",
    captionHTML: "Test",
    detailHTML: "Take a test on<br/> subject/chapter<br/> of your<br/> choice"
  };

  buyAccessStep: HomepageRegisterCircleStepDetails = {
    stemNameUrl: "Buy Channel",
    passiveColor: "#0230BA",
    activeColor: "#5783FF",
    captionHTML: "Buy <br/> Channel",
    detailHTML: "Choose <br/>Suitable <br/>Channel"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
