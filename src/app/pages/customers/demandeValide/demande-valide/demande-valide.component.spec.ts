import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeValideComponent } from './demande-valide.component';

describe('DemandeValideComponent', () => {
  let component: DemandeValideComponent;
  let fixture: ComponentFixture<DemandeValideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandeValideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandeValideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
