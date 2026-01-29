import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAndCurriculum } from './course-and-curriculum';

describe('CourseAndCurriculum', () => {
  let component: CourseAndCurriculum;
  let fixture: ComponentFixture<CourseAndCurriculum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseAndCurriculum]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseAndCurriculum);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
