import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSlideWidgetComponent } from './text-slide-widget.component';

describe('TextSlideWidgetComponent', () => {
  let component: TextSlideWidgetComponent;
  let fixture: ComponentFixture<TextSlideWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextSlideWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextSlideWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
