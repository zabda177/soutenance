import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeAccepterDetailsComponent } from './demande-accepter-details.component';

describe('DemandeAccepterDetailsComponent', () => {
  let component: DemandeAccepterDetailsComponent;
  let fixture: ComponentFixture<DemandeAccepterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandeAccepterDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandeAccepterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
