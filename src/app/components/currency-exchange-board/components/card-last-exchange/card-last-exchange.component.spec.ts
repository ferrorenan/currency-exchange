import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLastExchangeComponent } from './card-last-exchange.component';

describe('CardLastExchangeComponent', () => {
  let component: CardLastExchangeComponent;
  let fixture: ComponentFixture<CardLastExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLastExchangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardLastExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
