import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleStepWidgetComponent } from './circle-step-widget.component';

describe('CircleStepWidgetComponent', () => {
  let component: CircleStepWidgetComponent;
  let fixture: ComponentFixture<CircleStepWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleStepWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleStepWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
