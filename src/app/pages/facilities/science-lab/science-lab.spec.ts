import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceLab } from './science-lab';

describe('ScienceLab', () => {
  let component: ScienceLab;
  let fixture: ComponentFixture<ScienceLab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScienceLab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScienceLab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
