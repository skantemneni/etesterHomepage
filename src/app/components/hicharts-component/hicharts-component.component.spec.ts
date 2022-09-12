import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HichartsComponentComponent } from './hicharts-component.component';

describe('HichartsComponentComponent', () => {
  let component: HichartsComponentComponent;
  let fixture: ComponentFixture<HichartsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HichartsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HichartsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
