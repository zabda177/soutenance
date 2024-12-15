import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeRejeteComponent } from './demande-rejete.component';

describe('DemandeRejeteComponent', () => {
  let component: DemandeRejeteComponent;
  let fixture: ComponentFixture<DemandeRejeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandeRejeteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandeRejeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
