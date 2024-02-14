import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseLastDaysExchangeComponent } from './collapse-last-days-exchange.component';

describe('CollapseLastDaysExchangeComponent', () => {
  let component: CollapseLastDaysExchangeComponent;
  let fixture: ComponentFixture<CollapseLastDaysExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapseLastDaysExchangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollapseLastDaysExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
