import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConsultLayoutComponent } from './user-consult-layout.component';

describe('UserConsultLayoutComponent', () => {
  let component: UserConsultLayoutComponent;
  let fixture: ComponentFixture<UserConsultLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserConsultLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserConsultLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
