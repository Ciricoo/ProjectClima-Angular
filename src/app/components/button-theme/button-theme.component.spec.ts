import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonThemeComponent } from './button-theme.component';

describe('ButtonThemeComponent', () => {
  let component: ButtonThemeComponent;
  let fixture: ComponentFixture<ButtonThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
