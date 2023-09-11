import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSettingsComponent } from './input-settings.component';

describe('InputSettingsComponent', () => {
  let component: InputSettingsComponent;
  let fixture: ComponentFixture<InputSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
