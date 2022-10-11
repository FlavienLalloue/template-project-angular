import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserLayoutComponent } from './create-user-layout.component';

describe('CreateUserLayoutComponent', () => {
  let component: CreateUserLayoutComponent;
  let fixture: ComponentFixture<CreateUserLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
