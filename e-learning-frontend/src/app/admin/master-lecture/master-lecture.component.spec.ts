import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterLectureComponent } from './master-lecture.component';

describe('MasterLectureComponent', () => {
  let component: MasterLectureComponent;
  let fixture: ComponentFixture<MasterLectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterLectureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
