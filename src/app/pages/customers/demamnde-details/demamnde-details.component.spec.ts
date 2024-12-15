import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemamndeDetailsComponent } from './demamnde-details.component';

describe('DemamndeDetailsComponent', () => {
  let component: DemamndeDetailsComponent;
  let fixture: ComponentFixture<DemamndeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemamndeDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemamndeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
