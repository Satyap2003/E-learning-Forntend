import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCourseDemoComponent } from './view-course-demo.component';

describe('ViewCourseDemoComponent', () => {
  let component: ViewCourseDemoComponent;
  let fixture: ComponentFixture<ViewCourseDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCourseDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCourseDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
