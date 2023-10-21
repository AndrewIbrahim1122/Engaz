import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialDuplicatesComponent } from './potential-duplicates.component';

describe('PotentialDuplicatesComponent', () => {
  let component: PotentialDuplicatesComponent;
  let fixture: ComponentFixture<PotentialDuplicatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotentialDuplicatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotentialDuplicatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
