import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneQualifierComponent } from './personne-qualifier.component';

describe('PersonneQualifierComponent', () => {
  let component: PersonneQualifierComponent;
  let fixture: ComponentFixture<PersonneQualifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonneQualifierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonneQualifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
