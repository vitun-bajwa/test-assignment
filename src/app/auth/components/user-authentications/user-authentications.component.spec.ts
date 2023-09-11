import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthenticationsComponent } from './user-authentications.component';

describe('UserAuthenticationsComponent', () => {
  let component: UserAuthenticationsComponent;
  let fixture: ComponentFixture<UserAuthenticationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAuthenticationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuthenticationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
