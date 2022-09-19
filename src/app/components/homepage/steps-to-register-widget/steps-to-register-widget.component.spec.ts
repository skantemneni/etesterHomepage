import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsToRegisterWidgetComponent } from './steps-to-register-widget.component';

describe('StepsToRegisterWidgetComponent', () => {
  let component: StepsToRegisterWidgetComponent;
  let fixture: ComponentFixture<StepsToRegisterWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsToRegisterWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsToRegisterWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
