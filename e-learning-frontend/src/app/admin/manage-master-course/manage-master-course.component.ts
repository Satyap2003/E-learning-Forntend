import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Course } from '../../model/course';
import { SharedModule } from '../../shared/shared.module';
import { Module } from '../../model/module';

@Component({
  selector: 'app-manage-master-course',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './manage-master-course.component.html',
  styleUrl: './manage-master-course.component.css',
})
export class ManageMasterCourseComponent implements OnInit {
  module: Module = new Module();
  modules: Module[] = [];
  courses: Course[] = [];
  selectedCourseId:number = 0;
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.get('course').subscribe((res: any) => {
      this.courses = res;
    });
  }

  onSubmit() {
    this.apiService.post("module", this.module).subscribe((res : any) => {
      this.module = new Module();
    });
  }

  selectedCourseIdChange() {
    console.log(this.selectedCourseId);
    this.apiService.get("module/"+this.selectedCourseId).subscribe((res : any) => {
      console.log();
      this.modules = res;
    });
  }
}
