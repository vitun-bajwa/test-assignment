import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeachComponent } from './foreach.component';

describe('ForeachComponent', () => {
  let component: ForeachComponent;
  let fixture: ComponentFixture<ForeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('check component name' ,()=>{
    expect(component.componentName).toBe('hello')
  })
});
