import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietasDetalheComponent } from './dietas-detalhe.component';

describe('DietasDetalheComponent', () => {
  let component: DietasDetalheComponent;
  let fixture: ComponentFixture<DietasDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietasDetalheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DietasDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
