import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Params2Component } from './params2.component';

describe('Params2Component', () => {
  let component: Params2Component;
  let fixture: ComponentFixture<Params2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Params2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Params2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
