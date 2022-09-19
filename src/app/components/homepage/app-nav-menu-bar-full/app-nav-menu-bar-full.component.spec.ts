import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavMenuBarFullComponent } from './app-nav-menu-bar-full.component';

describe('AppNavMenuBarFullComponent', () => {
  let component: AppNavMenuBarFullComponent;
  let fixture: ComponentFixture<AppNavMenuBarFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNavMenuBarFullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppNavMenuBarFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
