import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrementComponent } from './agrement.component';

describe('AgrementComponent', () => {
  let component: AgrementComponent;
  let fixture: ComponentFixture<AgrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgrementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
