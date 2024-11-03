import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMasterCourseComponent } from './manage-master-course.component';

describe('ManageMasterCourseComponent', () => {
  let component: ManageMasterCourseComponent;
  let fixture: ComponentFixture<ManageMasterCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageMasterCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageMasterCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
