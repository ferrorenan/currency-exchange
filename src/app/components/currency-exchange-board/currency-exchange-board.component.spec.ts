import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyExchangeBoardComponent } from './currency-exchange-board.component';

describe('CurrencyExchangeBoardComponent', () => {
  let component: CurrencyExchangeBoardComponent;
  let fixture: ComponentFixture<CurrencyExchangeBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyExchangeBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyExchangeBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
