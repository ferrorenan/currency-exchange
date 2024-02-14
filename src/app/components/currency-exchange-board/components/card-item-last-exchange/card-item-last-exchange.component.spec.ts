import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemLastExchangeComponent } from './card-item-last-exchange.component';

describe('CardItemLastExchangeComponent', () => {
  let component: CardItemLastExchangeComponent;
  let fixture: ComponentFixture<CardItemLastExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardItemLastExchangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardItemLastExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
