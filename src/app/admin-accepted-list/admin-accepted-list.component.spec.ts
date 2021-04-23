import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAcceptedListComponent } from './admin-accepted-list.component';

describe('AdminAcceptedListComponent', () => {
  let component: AdminAcceptedListComponent;
  let fixture: ComponentFixture<AdminAcceptedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAcceptedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAcceptedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
