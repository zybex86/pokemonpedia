import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsCardComponent } from './pokemon-details-card.component';

describe('PokemonDetailsCardComponent', () => {
  let component: PokemonDetailsCardComponent;
  let fixture: ComponentFixture<PokemonDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDetailsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
