import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableChannelWidgetComponent } from './available-channel-widget.component';

describe('AvailableChannelWidgetComponent', () => {
  let component: AvailableChannelWidgetComponent;
  let fixture: ComponentFixture<AvailableChannelWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableChannelWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableChannelWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
