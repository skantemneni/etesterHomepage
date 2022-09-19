import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableChannelsViewComponent } from './available-channels-view.component';

describe('AvailableChannelsViewComponent', () => {
  let component: AvailableChannelsViewComponent;
  let fixture: ComponentFixture<AvailableChannelsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableChannelsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableChannelsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
