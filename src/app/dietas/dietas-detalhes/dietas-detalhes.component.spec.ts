import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietasDetalhesComponent } from './dietas-detalhes.component';

describe('DietasDetalhesComponent', () => {
  let component: DietasDetalhesComponent;
  let fixture: ComponentFixture<DietasDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietasDetalhesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DietasDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
