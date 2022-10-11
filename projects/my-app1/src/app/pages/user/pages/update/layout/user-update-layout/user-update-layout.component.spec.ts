import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdateLayoutComponent } from './user-update-layout.component';

describe('UserUpdateLayoutComponent', () => {
  let component: UserUpdateLayoutComponent;
  let fixture: ComponentFixture<UserUpdateLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUpdateLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserUpdateLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
