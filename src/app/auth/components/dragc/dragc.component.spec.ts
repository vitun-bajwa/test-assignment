import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragcComponent } from './dragc.component';

describe('DragcComponent', () => {
  let component: DragcComponent;
  let fixture: ComponentFixture<DragcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
