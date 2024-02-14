import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExchangeRateNowComponent } from './card-exchange-rate-now.component';

describe('CardExchangeRateNowComponent', () => {
  let component: CardExchangeRateNowComponent;
  let fixture: ComponentFixture<CardExchangeRateNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CardExchangeRateNowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardExchangeRateNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
