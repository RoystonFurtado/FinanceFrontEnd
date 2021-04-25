import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountWarningComponent } from './account-warning.component';

describe('AccountWarningComponent', () => {
  let component: AccountWarningComponent;
  let fixture: ComponentFixture<AccountWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountWarningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
