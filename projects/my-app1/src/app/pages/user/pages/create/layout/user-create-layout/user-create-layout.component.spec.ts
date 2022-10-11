import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateLayoutComponent } from './user-create-layout.component';

describe('UserCreateLayoutComponent', () => {
  let component: UserCreateLayoutComponent;
  let fixture: ComponentFixture<UserCreateLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreateLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCreateLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
