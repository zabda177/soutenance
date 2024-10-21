import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationEtablissementComponent } from './creation-etablissement.component';

describe('CreationEtablissementComponent', () => {
  let component: CreationEtablissementComponent;
  let fixture: ComponentFixture<CreationEtablissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationEtablissementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreationEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
