import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsByDateComponent } from './transactions-by-date.component';

describe('TransactionsByDateComponent', () => {
  let component: TransactionsByDateComponent;
  let fixture: ComponentFixture<TransactionsByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
