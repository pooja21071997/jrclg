import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsFacilities } from './sports-facilities';

describe('SportsFacilities', () => {
  let component: SportsFacilities;
  let fixture: ComponentFixture<SportsFacilities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportsFacilities]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsFacilities);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
