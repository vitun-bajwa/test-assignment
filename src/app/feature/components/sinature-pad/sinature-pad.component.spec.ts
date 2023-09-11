import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinaturePadComponent } from './sinature-pad.component';

describe('SinaturePadComponent', () => {
  let component: SinaturePadComponent;
  let fixture: ComponentFixture<SinaturePadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinaturePadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinaturePadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
