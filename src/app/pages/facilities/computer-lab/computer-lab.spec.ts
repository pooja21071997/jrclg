import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerLab } from './computer-lab';

describe('ComputerLab', () => {
  let component: ComputerLab;
  let fixture: ComponentFixture<ComputerLab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerLab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerLab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
